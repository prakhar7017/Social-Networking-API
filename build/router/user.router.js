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
const userService_1 = __importDefault(require("../service/userService"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const service = new userService_1.default();
router.post("/user/signup", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, username } = req.body;
        const { data } = yield service.signUp({ email, password, username });
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/user/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { data } = yield service.signIn({ email, password });
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
// @ts-ignore
router.get("/user/profile", auth_1.isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.user._id;
        const { data } = yield service.getuserDetails(id);
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
// @ts-ignore
router.patch("/user/updateName", auth_1.isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.user._id;
        const { username, bio } = req.body;
        const { data } = yield service.updateProfile(id, username, bio);
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
