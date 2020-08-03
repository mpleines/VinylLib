const express = require('express');
const router = express.Router();
const verifyToken = require('../verifyToken');
const jwt = require('jsonwebtoken');
const Genre = require('../models/Genre');

router.post('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if (err) {
      res.json(403);
    } else {
      try {
        const genres = await Genre.find();
        res.json(genres);
      } catch (err) {
        res.json({ message: err });
      }
    }
  });
});

module.exports = router;
