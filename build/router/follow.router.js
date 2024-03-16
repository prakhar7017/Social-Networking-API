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
const followService_1 = __importDefault(require("../service/followService"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const service = new followService_1.default();
//@ts-ignore
router.post("/follow/:id", auth_1.isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { data } = yield service.followUser(req.user._id, id);
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
//@ts-ignore
router.delete("/follow/:id", auth_1.isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { data } = yield service.unfollowUser(req.user._id, id);
        return res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
