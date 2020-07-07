const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const PORT = 4500;
var cors = require('cors');
app.use(cors());
app.listen(PORT,
  console.log("server run in port "+ PORT));
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://shlomi:sd12345678@cluster0-cktbr.mongodb.net/test?retryWrites=true&w=majority'
  , {useNewUrlParser: true}).then(console.log("connect succes to mongo"));


const gpu = require('./Api/Gpus');

app.use("/gpu",gpu);

const cpu = require('./Api/Cpus');

app.use("/cpu",cpu);
