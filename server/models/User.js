const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: JSON,
  },
  password: {
    type: String,
  },
  phoneNumber:{
    type: Number
  },
  image:{
    type: String
  },
  category:{
    type: String
  }
}, 
{
  timestamps: true
}
);

module.exports = mongoose.model('User', userSchema);
