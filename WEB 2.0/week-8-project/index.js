require("dotenv").config();

const express = require("express");
const { userRouter } = require("./user");
const { courseRouter } = require("./course");
const { adminRouter } = require("./admin");

const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
  console.log("listening on port 3000");
}

main();
