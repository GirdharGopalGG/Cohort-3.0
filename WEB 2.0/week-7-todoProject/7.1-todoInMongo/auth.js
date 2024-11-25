const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
  const token = req.headers.token;

  const data = jwt.verify(token, process.env.JWT_SECRET); //

  console.log(data);

  if (data) {
    req.userId = data.id;
    next();
  } else {
    res.status(403).json({
      msg: "invalid token",
    });
  }
}

module.exports = {
  auth,
};
