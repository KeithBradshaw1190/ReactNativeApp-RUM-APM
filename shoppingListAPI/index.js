const fetch = require("node-fetch");
//ENV Vars
const DD_ENV = process.env.DD_ENV || 'dev'
// const DD_AGENT_HOST = process.env.DD_AGENT_HOST || 'localhost'
let NGROK_URL = process.env.NGROK_URL || null
require('dd-trace').init({
  hostname: 'datadog-agent',
    env: DD_ENV
})


// Require express
const express = require("express")
// Import Mongoose
const mongoose = require("mongoose");


// Import routes
const toDoList = require("./routes/List");
// Initialize express and define a port
const app = express()


// Connect to Mongoose and set connection variable
const url = 'mongodb://mongo:27017/list';

mongoose.connect(
  url, {
    useNewUrlParser: true
  }
);
var db = mongoose.connection;

// Added check for DB connection
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// Setup server port
const PORT = process.env.PORT || 3000

// Tell express to use JSON parsing
app.use(express.json());

// Use Api routes in the App
app.use(toDoList);

// Start express on the defined port
app.listen(PORT, () => console.log(`List API running on port ${PORT}`))



