const express = require('express');

const router = express.Router();

// routes

router.get('/', ( req, res ) => {
  res.send('This is an example of basic rest api...')
});

router.get('/home', ( req, res ) => {
  res.send('We are on home...')
});

module.exports = router;