// handle auth
module.exports = function (req, res, next) {
  // get auth header value
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    // set the token
    req.token = token;
    // call next middleware
    next();
  } else {
    res.sendStatus(403);
  }
}