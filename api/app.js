const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv/config')

// init app
const app = express();

// cors
app.use(cors());

// parse body of requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import all available routes
const recordRoutes = require('./routes/records.js');
const User = require('./models/User.js');

app.use('/records', recordRoutes);

app.get('/', async (req, res) => {
  res.send(`
    <span>Api for VinylLib</span>
  `)
});

// login route to get jwt
app.post('/login', async (req, res) => {
  // Search for User by username and password
  const user = await User.findOne({'username': req.body.username, 'password': req.body.password});
  if(!user) {
    res.send(404);
  } else {
    jwt.sign({user}, 'secretkey', (err, token) => {
      res.json({token});
    });
  }
});

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(res => {
    console.log('DB Connected!')
  })
  .catch(err => {
    console.log(Error, err.message)
  });

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`REST API running on: port ${port}`);