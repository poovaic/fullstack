//https://github.com/Jonathanh7/Mern-Stack-Hooks
//open two terminals. server will be on npm start in the background terminal
const mongoose = require("mongoose")

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/itemsDatabase'

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
  console.log('Succesfully connected to MongoDB.');
})
.catch(e => console.error('Connection error', e.message));

const db = mongoose.connection;
module.exports = db;