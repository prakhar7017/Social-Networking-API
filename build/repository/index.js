"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepository = exports.followRepository = exports.userRepository = void 0;
const user_repository_1 = __importDefault(require("./user.repository"));
exports.userRepository = user_repository_1.default;
const follow_repository_1 = __importDefault(require("./follow.repository"));
exports.followRepository = follow_repository_1.default;
const post_repository_1 = __importDefault(require("./post.repository"));
exports.postRepository = post_repository_1.default;
