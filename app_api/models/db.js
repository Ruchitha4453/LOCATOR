const mongoose = require('mongoose');
require('dotenv').config(); 
const PORT = process.env.PORT || 3000;
 

var gracefulShutdown;
var dbURI = "mongodb://0.0.0.0:27017/";
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_URI;
    
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);  
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
require('./locations');


{/*
 require('dotenv').config(); 
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/loc8r' ); // Corrected the environment variable name
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};
connectDB() 
require('./locations');

*/}