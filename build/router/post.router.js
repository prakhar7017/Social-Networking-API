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
const express_1 = require("express");
const postService_1 = __importDefault(require("../service/postService"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const service = new postService_1.default();
//@ts-ignore
router.post("/post/create", auth_1.isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const { data } = yield service.createPost({ title, description: content, _author_id: req.user._id });
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/posts", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield service.findAllPost();
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
//@ts-ignore
router.get("/post/:id", auth_1.isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { data } = yield service.findPostById(id);
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
//@ts-ignore
router.patch("/post/:id", auth_1.isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const { data } = yield service.updatePostById(id, { title, description: content, _author_id: req.user._id });
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
//@ts-ignore
router.delete("/post/:id", auth_1.isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { data } = yield service.deletePostById(id);
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
