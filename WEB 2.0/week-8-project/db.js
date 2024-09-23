// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId
// mongoose.connect('mongodb+srv://greatgmang:93XMVP6TPkGDixzm@cluster0.ajhckxw.mongodb.net/week-8-courseProject')

// const userSchema = Schema({
//     email:{type:String,unique:true},
//     password:String,
//     firstName:String,
//     lastName:String
// })
// const adminSchema = Schema({
    
// })
// const couresSchema = Schema({
    
// })
// const purchaseSchema = Schema({
//     userId:ObjectId,
//     courseId:ObjectId
// })



const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}