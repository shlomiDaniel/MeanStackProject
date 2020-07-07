const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Gpu = new Schema({

  name :String,
  _id: String,
  company:String,
  price:String,
  imgPath:String,
  description:String,
  imgPathCompanyLogo:String,
  numOfStars:String,
  key:String

});


module.exports=mongoose.model('GraphicCards', Gpu);
