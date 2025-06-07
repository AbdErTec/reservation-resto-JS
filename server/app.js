const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeClient = require('./routes/clientRoutes');

exports.connexion = ()=>{
    // mongoose.connect('mongodb+srv://taharami22014:taharami22014@cluster0.ukrqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    mongoose.connect('mongodb://localhost:27017/restauDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
    console.log("Connected succesfully");
}).catch((error)=>{
    console.log("Failed to connect");
});

}

app.use(bodyParser.json());
app.use('./api/client',routeClient);
module.exports = app;