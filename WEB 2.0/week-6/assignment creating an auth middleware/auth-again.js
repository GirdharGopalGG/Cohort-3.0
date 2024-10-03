const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const users = [];

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
  } else {
    users.push({
      username,
      password,
    });
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
});
