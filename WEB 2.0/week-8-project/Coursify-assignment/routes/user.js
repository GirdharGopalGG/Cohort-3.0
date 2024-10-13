const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userModel, courseModel } = require("../db");
const userAuthMiddleware = require("../authMiddleware/user");

// router.use(express.json());

router.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const user = await userModel.findOne({
    email,
  });
  if (user) {
    res.json({
      msg: "email already exists, try logging in",
    });
    return;
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  await userModel.create({
    name,
    email,
    password: encryptedPassword,
  });
  res.json({
    msg: "signed up successfully",
  });
});

router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await userModel.findOne({
    email,
  });
  if (!user) {
    res.json({
      msg: "email not found, please sign up",
    });
    return;
  }
  const passwordMatch = bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_USER_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.json({
      msg: "sth went wrong",
    });
  }
});

router.get("/courses", async (req, res) => {
  //need not be authenticated
  const allCourses = await courseModel.find({}); // AN EMPTY OBJECT FINDS ALL COURSES IN THE COURSE TABLE
  res.json({
    allCourses,
  });
});

router.post("/course", userAuthMiddleware, async (req, res) => {
  //purchase course
  const userId = req.id;
  const courseId = req.body.courseId;
  await userModel.updateOne(
    {
      _id: userId,
    },
    {
      $push: { purchasedCourses: courseId },
    }
  );
  res.json({
    msg: "course purchased successfully",
  });
});

router.get("/purchasedCourses", userAuthMiddleware, async (req, res) => {
  const userId = req.id;
  const user = await userModel
    .findOne({
      _id: userId,
    })
    .populate("purchasedCourses");
  res.json({
    "Your purchases": user.purchasedCourses,
  });
});

module.exports = router;
