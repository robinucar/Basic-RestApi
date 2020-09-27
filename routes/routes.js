const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// routes

router.get('/', ( req, res ) => {
  res.send('This is an example of basic rest api...')
});

router.post('/', (req,res) => {
  console.log(req.body);
})




module.exports = router;