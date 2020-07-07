const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const GPU = require('../Models/Gpu');
router.get("/",(req,res)=>{
  GPU.find().then(data=>res.json(data));
});
router.get("/:name",(req,res)=>{
  GPU.find({name:req.param.name}).then(data=>res.json(data)).then(data=>console.log(data));
});
router.post("/",(req,res)=>{

  const gpu = new GPU({
    name :req.body.name,
    company:req.body.company,
    price:req.body.price,
    imgPath:req.body.imgPath,
    description:req.body.description,
    imgPathCompanyLogo:req.body.imgPathCompanyLogo,
    numOfStars:req.body.numOfStars,
    key:req.body.key



  });
  gpu.save().then(res=>console.log(res));
  res.send(gpu);
});


module.exports = router;
