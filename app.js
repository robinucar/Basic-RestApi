const express = require('express');

const app = express();

// Routes

app.get('/', ( req, res ) => {
  res.send('This is an example of basic rest api...')
})

app.get('/home', ( req, res ) => {
  res.send('We are on home...')
})

// lisitening to the server

app.listen(3000)