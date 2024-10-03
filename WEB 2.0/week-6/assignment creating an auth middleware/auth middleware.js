require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
// const JWT_SECRET = "kamla";
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());
const users = [];

function authMiddleware(req, res, next) {
  const token = req.headers.token;
  const decodedJWT = jwt.verify(token, JWT_SECRET); //gets back the object with which it was signed by
  const user = users.find((user) => {
    return decodedJWT.username === user.username;
  });
  if (user) {
    req.user = user.username;
    next();
  } else {
    res.status(401).json({
      msg: "wrong credentials",
    });
    return;
  }
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const doesUsernameExists = users.find((user) => {
    return user.username === username;
  });
  if (!doesUsernameExists) {
    users.push({
      username: username,
      password: password,
    });
    res.json({
      msg: "welcome",
    });
  } else {
    res.status(401).json({
      msg: "username already exists",
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
      token,
    });
  } else {
    res.status(401).json({
      msg: "wrong credentials",
    });
  }
});

app.get("/me", authMiddleware, (req, res) => {
  const user = req.user;
  res.json({
    user,
  });
});

app.listen(3000);
