require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());

const users = [];
function authMiddleware(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET); //this will contain the object which you have signed when encoding with jwt_secret---in this case username
  const user = users.find((user) => {
    return user.username === decodedData.username;
  });
  if (user) {
    req.user = user;
    next();
  } else {
    res.json({
      msg: "invalid token",
    });
    return;
  }
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((user) => {
    return user.username === username;
  });
  if (user) {
    res.status(401).json({
      msg: "username already exists",
    });
    return;
  } else {
    users.push({
      username,
      password,
    });
    res.json({
      msg: "welcome",
    });
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((user) => {
    return user.username === username && user.password === password;
  });
  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(401).json({
      msg: "username or password incorrect",
    });
  }
});

app.get("/me", authMiddleware, (req, res) => {
  res.json({
    username: req.user.username, //because it shares the same req and res object so we are maipulating the req object here
    password: req.user.password,
  });
});

app.listen(3000);
