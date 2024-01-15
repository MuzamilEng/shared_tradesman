const mongoose = require('mongoose');

const tradesMenSchema = new mongoose.Schema({
  userinfo: Object,
    occupation: String,
    username: String,
    email: String,
    ratings: Number,
    hourlyRate: Number,
    description: String,
    location: String,
    lat: Number,
    lng: Number,
    phoneNumber: Number,
    availability: String,
    gigTitle: String,
    gigDescription: String,
    image: {
      type: String,
      },
    gigImage1:{
      type: String,
    },
    gigImage2:{
      type: String,
    },
    gigImage3:{
      type: String,
    },
    video:{
      type: String,
    },
    docs1:{
      type: String,
    },
    docs2:{
      type: String,
    },
  }, {timestamps: true})

module.exports = mongoose.model('Trademan', tradesMenSchema);
