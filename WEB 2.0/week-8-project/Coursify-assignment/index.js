require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
}

main();
