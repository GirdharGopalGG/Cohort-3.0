const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "shhh";

app.use(express.json());

const users = [];

// function generateToken() {
//   const array = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     token += array[Math.floor(Math.random() * array.length)];
//   }
//   return token;
// }

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const doesUsernameExists = users.find((user) => {
    return user.username === username;
  });

  if (doesUsernameExists) {
    res.json({
      msg: "username already exists",
    });
    return;
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: `congrats!!! you're signed up. Now proceed to login`,
  });

  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const isCredentialsTrue = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (!isCredentialsTrue) {
    return res.status(401).json({
      msg: "Wrong Credentials || sign up krle pehle... tab aana",
    });
  }

  // const token = generateToken();

  const token = jwt.sign(
    {
      username: username, //creating jwt (encoding username only if the credentials are correct which is being checked in line no. 81)
    },
    JWT_SECRET
  );

  // isCredentialsTrue.token = token;

  res.json({
    msg: "are welcome welcome... ye lo apna token... safe rakhna",
    token: token,
  });
  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.token;

  const decodedJWT = jwt.verify(token, JWT_SECRET); //it gets back the reference to the object during jwt.sign() which in this case is {username:'gg'} ---- the whole object

  const username = decodedJWT.username;

  const doesUsernameExists = users.find((user) => {
    return user.username === username;
  });

  if (!doesUsernameExists) {
    res.json({
      msg: `username doesn't exist`,
    });
  }
  res.json({
    username: username,
  });

  // const matchToken = users.find((user) => {
  //   return (user.token === token);
  // });
  // if (matchToken) {
  //   res.json({
  //     username: matchToken.username,
  //   });
  // } else {
  //   res.status(401).json({
  //     msg: "access Denied",
  //   });
  // }
});

app.listen(3000);
