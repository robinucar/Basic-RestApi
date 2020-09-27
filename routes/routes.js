const express = require('express');

const router = express.Router();

// routes

router.get('/', ( req, res ) => {
  res.send('This is an example of basic rest api...')
});

router.get('/spesific', ( req, res ) => {
  res.send(' Spesific ...')
});




module.exports = router;