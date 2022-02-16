"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: String,
    message: String,
    creater: String,
    tags: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
const PostMessage = (0, mongoose_1.model)("PostMessage", postSchema);
exports.default = PostMessage;
