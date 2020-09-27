const express = require('express');

const app = express();

const mongoose = require('mongoose');
require('dotenv/config')

// Import routes

const routes = require('./routes/routes.js');

// Middleware

app.use('/home', routes);

// Connect to DB

mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser: true},
  () => console.log('Connected to db!')
)

// lisitening to the server

app.listen(3000)