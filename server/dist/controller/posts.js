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
exports.deletePost = exports.updatePost = exports.createPost = exports.getPosts = void 0;
const postMessage_1 = __importDefault(require("../models/postMessage"));
const mongoose_1 = __importDefault(require("mongoose"));
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postMessages = yield postMessage_1.default.find();
        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error });
    }
});
exports.getPosts = getPosts;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, message, selectedFile, creator, tags } = req.body;
    console.log(creator, title);
    const newPost = new postMessage_1.default({
        title,
        message,
        selectedFile,
        creator,
        tags,
    });
    try {
        yield newPost.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error });
    }
});
exports.createPost = createPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose_1.default.Types.ObjectId.isValid(_id))
        return res.status(404).send("No post with that ID");
    const updatedPost = yield postMessage_1.default.findByIdAndUpdate(_id, Object.assign(Object.assign({}, post), { _id }), {
        new: true,
    });
    res.json(updatedPost);
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: _id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(_id))
        return res.status(404).send("No post with that ID");
    yield postMessage_1.default.findByIdAndRemove(_id);
    res.json({ message: "Post deleted successfully" });
});
exports.deletePost = deletePost;
