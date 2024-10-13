const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "course" }],
});

const courseSchema = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
  imageLink: String,
  published: Boolean,
  creatorId: mongoose.Schema.Types.ObjectId,
});

// const purchaseSchema = mongoose.Schema({
//   userId: mongoose.Schema.Types.ObjectId,
//   courseId: mongoose.Schema.Types.ObjectId,
// });

const adminModel = mongoose.model("admin", adminSchema);
const userModel = mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", courseSchema);
// const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  adminModel,
  userModel,
  courseModel,
};
