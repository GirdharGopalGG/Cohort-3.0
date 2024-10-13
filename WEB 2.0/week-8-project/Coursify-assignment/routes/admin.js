require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { adminModel, courseModel } = require("../db");
const router = express.Router();
const adminAuthMiddleware = require("../authMiddleware/admin");

// router.use(express.json());

router.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const encryptedPassword = await bcrypt.hash(password, 10);

  const user = await adminModel.findOne({
    email,
  });
  if (user) {
    res.json({
      msg: "email already exists, try logging in",
    });
    return;
  }

  await adminModel.create({
    email,
    password: encryptedPassword,
    name,
  });
  res.json({
    msg: "signed up successfully",
  });
});

router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await adminModel.findOne({
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
      process.env.JWT_ADMIN_SECRET
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

router.post("/course", adminAuthMiddleware, async (req, res) => {
  const { title, desc, price, imageLink, published } = req.body;

  const adminId = req.id;

  const isAdmin = await adminModel.findOne({
    _id: adminId,
  });

  if (!isAdmin) {
    res.json({
      msg: `you're not an admin`,
    });
    return;
  }

  await courseModel.create({
    title,
    desc,
    price,
    imageLink,
    published,
    creatorId: adminId,
  });
  res.json({
    msg: `course created successfully`,
  });
});

router.put("/course", adminAuthMiddleware, async (req, res) => {
  const adminId = req.id;
  const { title, desc, price, imageLink, courseId } = req.body;

  const isCorrectAdmin = await courseModel.findOne({
    _id: courseId,
    creatorId: adminId,
  });
  console.log(isCorrectAdmin);
  if (!isCorrectAdmin) {
    res.json({
      msg: `You're not authorized to change this`,
    });
    return;
  }

  await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title,
      desc,
      price,
      imageLink,
    }
  );

  res.json({
    msg: "course updated",
    courseId: courseId,
  });
});

router.get("/courses", adminAuthMiddleware, async (req, res) => {
  const adminId = req.id;
  const allCourses = await courseModel.find({
    creatorId: adminId,
  });
  res.json({
    allCourses,
  });
});

module.exports = router;
