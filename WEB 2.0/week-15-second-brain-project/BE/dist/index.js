"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const mongoose = require('mongoose');
const db_1 = require("./db");
const auth_1 = require("./auth");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        yield db_1.userModel.create({
            username,
            password
        });
        res.json({
            msg: 'data added'
        });
    }
    catch (e) {
        res.status(400).json({
            msg: 'username already exists'
        });
    }
}));
app.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield db_1.userModel.findOne({
        username,
        password
    });
    if (user) {
        const token = jsonwebtoken_1.default.sign({
            id: user._id
        }, process.env.JWT_SECRET);
        res.json(token);
    }
    else {
        res.status(200).json({
            msg: 'wrong credentials'
        });
    }
}));
app.post('/content', auth_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { link, type, title } = req.body;
    yield db_1.contentModel.create({
        link, type, title,
        //@ts-ignore
        userId: req.id,
        tags: []
    });
    res.json({
        msg: 'content added'
    });
}));
app.get('/content', auth_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.id;
    const content = yield db_1.contentModel.find({
        userId: userId
    }).populate('userId', 'username ');
    res.json({
        content
    });
}));
app.delete('/content', auth_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield db_1.contentModel.deleteMany({
        //@ts-ignore
        userId: req.id,
        _id: contentId
    });
    res.json({
        msg: 'deleted'
    });
}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose.connect(process.env.MONGO_URL);
        app.listen(3000);
        console.log(`you're connected now to Port 3000`);
    });
}
main();
