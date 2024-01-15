const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { authenticateJWT } = require('../middleware/authMiddleware');
const passport = require('passport');
const cloudinary = require('../cloudinary.config');

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, category, password, email, phoneNumber } = req.body;
    console.log(req.body, "namesvgfdt")
    let mainImageURL;
    // Check if the email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    if (req.file) {
      const mainImage = req.file;
      const mainImageResult = await cloudinary.uploader.upload(mainImage.path, {
        folder: 'Assets',
      });
      mainImageURL = mainImageResult.secure_url;
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create and save the new user
    const newUser = new User({
      firstName,
      lastName,
      category,
      password: hashedPassword,
      email,
      phoneNumber,
      image: mainImageURL
    });

    const savedUser = await newUser.save();

    const responseObj = {
      ...savedUser._doc,
    }
    if (mainImageURL) {
      responseObj.mainImage = mainImageURL;
    }


    res.status(201).json(responseObj);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!user) {
      return res.status(401).json({ error: info.message });
    }

    // Generate and sign a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, 'JSONWEBTOKKENSECRETKEY!@#$%^&*()', {
      expiresIn: '12d',
    });

    // Send the token in the response
    return res.json({ token });
  })(req, res, next);
};

const getUserDetails = (req, res) => {
  console.log(req.body, 'token here');
  // Use the authenticateJWT middleware before processing the request
  authenticateJWT(req, res, async () => {
    // Access the authenticated user through req.user
    const user = req.user;

    // Send user details in the response
    return res.json({
      id: user?._id,
      username: user?.firstName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      category: user?.category,
      image: user?.image
    });
  });
};

const allUsers = async (req, res) => {
  console.log(req.query, 'query');
  const keyword = req.query.search ? 
  {
    $or : [
      { username: {$regex : req.query.search, $options: "i"}},
      { email: {$regex : req.query.search, $options: "i"}},
    ]
  } : {};

  try {
    const profiles = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signUp,
  login,
  getUserDetails,
  allUsers
};
