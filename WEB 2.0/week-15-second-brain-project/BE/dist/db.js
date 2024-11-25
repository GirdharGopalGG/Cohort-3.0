"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkModel = exports.contentModel = exports.tagsModel = exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, unique: true },
    password: String
});
exports.userModel = mongoose_1.default.model('user', userSchema);
const tagsSchema = new mongoose_1.default.Schema({
    tags: { type: String, required: true, unique: true }
});
exports.tagsModel = mongoose_1.default.model('tags', tagsSchema);
const contentSchema = new mongoose_1.default.Schema({
    link: String,
    type: String,
    title: String,
    tags: [{ type: mongoose_1.default.Schema.ObjectId, ref: exports.tagsModel }],
    userId: { type: mongoose_1.default.Schema.ObjectId, ref: exports.userModel }
});
exports.contentModel = mongoose_1.default.model('content', contentSchema);
const linkSchema = new mongoose_1.default.Schema({
    hash: String,
    userId: { type: mongoose_1.default.Schema.ObjectId, ref: exports.userModel }
});
exports.linkModel = mongoose_1.default.model('link', linkSchema);
