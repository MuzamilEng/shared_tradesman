const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const cors = require('cors');
const auth = require('./routes/auth')
const tradesmanRoute = require('./routes/TradesMan');
const chatRoute = require('./routes/Chat');
const messageRoute = require('./routes/Message');
const http = require('http');
// const server = http.createServer(app);
const Message = require('./models/Message');


const port = process.env.PORT || 5000;
require('dotenv').config({ path: '.env' })

connectDB();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json({limit: "50mb",  extended: true}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// Routes

app.get('/', (req, res) => {
  console.log('hello bot');
  res.json({req})
});

app.get('/api/v1/messages', async (req, res) => {
 try {
  const messages = await Message.find();
  res.status(200).json(messages);
  console.log(messages, 'messages');
 } catch (error) {
  console.log(error, 'error fetching messages' );
 }
})

app.use('/api/v1/', auth);
app.use('/api/v1/tradesman', tradesmanRoute);
app.use('/api/v1/chat', chatRoute);
app.use('/api/v1/message', messageRoute);

app.use(errorHandler)
app.use(notFound)
// socket.io --------configuration
const server = app.listen(
  port,
  console.log(`Server running on PORT ${port}...`)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData.id);
    // console.log(userData.id, 'connected user id');
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});