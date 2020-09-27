const express = require('express');

const app = express();

const mongoose = require('mongoose');
require('dotenv/config')

// Routes

app.get('/', ( req, res ) => {
  res.send('This is an example of basic rest api...')
})

app.get('/home', ( req, res ) => {
  res.send('We are on home...')
})

// Connect to DB

mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser: true},
  () => console.log('Connected to db!')
)

// lisitening to the server

app.listen(3000)