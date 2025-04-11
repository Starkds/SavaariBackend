const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  placeName:{
    type:String,
    required:true
  },
  placeImage:{
    type:String
  },
  placeDetails:{
    type:String
  }
})  


const Place = mongoose.model("Place" , placeSchema);