const express = require('express');
const router = express.Router();
const Record = require('../models/Record');
const verifyToken = require('../verifyToken');
const jwt = require('jsonwebtoken');

// get back all records
router.post('/all', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if (err) {
      res.json(403);
    } else {
      try {
        const records = await Record.find({ username: req.body.username });
        res.json(records);
      } catch (err) {
        res.json({ message: err });
      }
    }
  });
});

// get count of all records
router.post('/all/count', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if (err) {
      res.json(403);
    } else {
      try {
        const count = await Record.countDocuments({
          username: req.body.username,
        });
        res.json(count);
      } catch (err) {
        res.json({ message: err });
      }
    }
  });
});

// get back the last added record
router.post('/last-added', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if (err) {
      res.json(403);
    } else {
      try {
        const lastAdded = await Record.find({ username: req.body.username })
          .sort({ created: -1 })
          .limit(1);
        res.json(lastAdded);
      } catch (err) {
        res.json({ message: err });
      }
    }
  });
});

// get back filtered records
router.post('/filtered', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if (err) {
      res.json(403);
    } else {
      try {
        const records = await Record.find({
          username: req.body.user.username,
          album: { $regex: req.body.filter, $options: 'i' },
        });
        res.json(records);
      } catch (err) {
        res.json({ message: err });
      }
    }
  });
});

// get back specific record
router.get('/:recordId', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if (err) {
      res.send(403);
    } else {
      try {
        const record = await Record.findById(req.params.recordId);
        res.json(record);
      } catch (err) {
        res.json({ message: err });
      }
    }
  });
});

router.post('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      try {
        const data = await new Record(req.body).save();
        res.json(data);
      } catch (err) {
        res.send(err);
      }
    }
  });
});

// delete a record
router.delete('/:recordId', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if (err) {
      res.json(403);
    } else {
      try {
        const removedRecord = await Record.remove({
          _id: req.params.recordId,
        });
        res.json(removedRecord);
      } catch (err) {
        res.json(err);
      }
    }
  });
});

module.exports = router;
