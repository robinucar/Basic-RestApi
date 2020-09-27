const express = require('express');

const app = express();

// Routes

app.get('/', ( req, res ) => {
  res.send('This is an example of basic rest api...')
})

// listening

app.listen(3000)