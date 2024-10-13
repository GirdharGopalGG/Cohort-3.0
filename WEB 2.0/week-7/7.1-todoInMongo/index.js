require("dotenv").config();
const z = require("zod");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { auth } = require("./auth");
const { userModel, todoModel } = require("./db");

mongoose.connect(process.env.MONGODB_URL);

app.use(express.json());

// app.post("/signup", async (req, res) => {
//   const name = req.body.name;
//   const password = req.body.password;
//   const email = req.body.email;

//   const encryptedPassword = await bcrypt.hash(password, 5);

//   try {
//     await userModel.create({
//       name: name,
//       password: encryptedPassword,
//       email: email,
//     });

//     res.json({
//       msg: "added in database",
//     });
//   } catch (error) {
//     res.json({
//       error,
//     });
//   }
// });

app.post("/signup", async (req, res) => {
  try {
    //input validation with {{zod}}
    const requiredBody = z.object({
      email: z.string().min(5).max(50).email(),
      password: z.string().min(8),
      name: z.string(),
    });

    const safeParsedData = requiredBody.safeParse(req.body);

    if (!safeParsedData.success) {
      res.json({
        msg: "incorrect format",
        error: safeParsedData.error.issues,
      });
      return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const emailExists = await userModel.findOne({
      email,
    });
    if (emailExists) {
      res.json({
        msg: "email already exists. Please Log in",
      });
      return;
    }
    await userModel.create({
      email,
      password: encryptedPassword,
      name,
    });
    res.json({
      msg: "creds added",
    });
  } catch (e) {
    console.log(e);
    res.json({
      msg: `'sth's wrong'`,
    });
  }
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await userModel.findOne({
    email: email,
  });

  if (!user) {
    res.json({
      msg: "email not in db. Please Sign up",
    });
    return;
  }

  console.log(user);
  const passwordMatch = await bcrypt.compare(password, user.password);

  console.log(passwordMatch);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(401).json({
      msg: "username/password incorrect",
    });
  }
});

app.post("/todo", auth, async (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const done = req.body.done;
  const userId = req.userId;

  if (userId) {
    await todoModel.create({
      userId: userId,
      title: title,
      desc: desc,
      done: done,
    });
    res.json({
      msg: "todo added",
    });
  } else {
    res.json({
      msg: "invalid creds",
    });
  }
});

// app.get("/todos", auth, async (req, res) => {
//   const id = req.userId;
//   console.log(id);
//   if (id) {
//     const todos = await todoModel.find({
//       id,
//     });
//     res.json({
//       todos,
//     });
//   } else {
//     res.json({
//       msg: "wrong creds",
//     });
//   }
// });

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;
  console.log(userId);
  console.log(typeof userId);

  const todos = await todoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
