const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://leo9081:Wya19900801@cluster0-qujqk.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log(err.message);
    client.close();
});*/

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB datavase connection established successfully");
})

const usersRouter =require('./routes/users');

app.use("/users", usersRouter);

app.listen(port,()=>{
    console.log('server is running on port: ' + port);
});