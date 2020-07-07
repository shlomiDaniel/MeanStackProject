const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const CPU = require('../Models/Cpu');
router.get("/",(req,res)=>{
  CPU.find().then(data=>res.json(data));
});
router.post("/",(req,res)=>{

  const cpu = new CPU({
    name :req.body.name,
    company:req.body.company,
    price:req.body.price,
    img:req.body.img,
    speed:req.body.img,
    numberOfCores:req.body.numberOfCores

  });
  cpu.save().then(res=>console.log(res));
  res.send(cpu);
});


module.exports = router;
