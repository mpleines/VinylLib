const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv/config');

// init app
const app = express();

// cors
app.use(cors());

// parse body of requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import all available routes
const recordRoutes = require('./routes/records.js');
const genreRoutes = require('./routes/genres.js');
const User = require('./models/User.js');

app.use('/records', recordRoutes);
app.use('/genres', genreRoutes);

app.get('/', async (req, res) => {
  res.send(`
    <span>Api for VinylLib</span>
  `);
});

// login route to get jwt
app.post('/login', async (req, res) => {
  // Search for User by username and password
  const user = await User.findOne({ username: req.body.username });
  // check if user exists
  if (!user) {
    res.status(400).send({ message: 'The User does not exist' });
  }
  // compare the passwords
  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(400).send({ message: 'Invalid Password' });
  } else {
    // user exists with password, we can safely respond with a token
    jwt.sign({ user }, 'secretkey', (err, token) => {
      res.json({ token });
    });
  }
});

app.post('/register', async (req, res) => {
  console.log(req.body);
  if (!req.body.username) {
    return res.status(500).send({ message: 'Username required' });
  }
  if (!req.body.password) {
    return res.status(500).send({ message: 'Password required' });
  }
  if (!req.body.email) {
    return res.status(500).send({ message: 'Email required' });
  }

  try {
    // hash the password
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    // create and save user
    const user = new User(req.body);
    const result = user.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

mongoose
  .connect('mongodb://mongo:27017', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(Error, err.message);
  });

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`REST API running on: port ${port}`);
