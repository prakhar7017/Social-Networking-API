"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = exports.FollowModel = exports.UserModel = void 0;
const userSchema_1 = __importDefault(require("./userSchema"));
exports.UserModel = userSchema_1.default;
const followSchema_1 = __importDefault(require("./followSchema"));
exports.FollowModel = followSchema_1.default;
const postSchema_1 = __importDefault(require("./postSchema"));
exports.PostModel = postSchema_1.default;
