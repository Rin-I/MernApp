"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_1 = require("../controller/posts");
const router = express_1.default.Router();
router.get("/", posts_1.getPosts);
router.post("/", posts_1.createPost);
exports.default = router;
