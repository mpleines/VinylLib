const express = require('express');
const router = express.Router();
const Record = require('../models/Record');
const verifyToken = require('../verifyToken');
const jwt = require('jsonwebtoken');

// get back all records
router.post('/all', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if(err) {
      res.json(403);
    } else { 
      try {
        const records = await Record.find({username: req.body.username})
        res.json(records)
      } catch (err) {
        res.json({ message: err })
      }
    }
  });
})

// get back specific record
router.get('/:recordId', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async(err, authData) => {
    if(err){
      res.json(403);
    } else {
      try {
        const record = await Record.findById(req.params.recordId)
        res.json(record)
      } catch (err) {
        res.json({ message: err })
      }
    }
  })
})

router.post('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if(err) {
      res.json(403);
    } else {
      const { created, artist, album, yearOfRelease, genre, storageLocation, username } = req.body
      const record = await new Record({
        created,
        artist,
        album,
        yearOfRelease,
        genre,
        storageLocation,
        username
      })
      try {
        const data = await record.save()
        res.json(data)
      } catch (err) {
        res.json({ message: err })
      }
    }
  })
})

// delete a record
router.delete('/:recordId', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async(err, authData) => {
    if(err){
      res.json(403);
    } else {
      try {
        const removedRecord = await Record.remove({
          _id: req.params.recordId
        })  
        res.json(removedRecord)
      } catch (err) {
        res.json(err)
      }
    }
  })
})

module.exports = router
