const express = require('express');

const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

const bodyParser = require('body-parser');

const cors = require('cors');

// Import routes

const routes = require('./routes/routes.js');

// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use('/post', routes);

// Connect to DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('Connected to db!')
);

// lisitening to the server

app.listen(3000);
