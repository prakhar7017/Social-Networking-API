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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("../repository");
const utils_1 = require("../utils/utils");
class PostService {
    constructor() {
        this.repository = new repository_1.postRepository();
    }
    createPost(postInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("postInput", postInput);
                const post = yield this.repository.createPost(postInput);
                console.log("post", post);
                return (0, utils_1.FormateDate)({ post });
            }
            catch (error) {
                return (0, utils_1.FormateDate)({ error });
            }
        });
    }
    findPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.repository.findPostById(id);
                return (0, utils_1.FormateDate)({ post });
            }
            catch (error) {
                return (0, utils_1.FormateDate)({ error });
            }
        });
    }
    findAllPost() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.repository.findAllPost();
                return (0, utils_1.FormateDate)({ post });
            }
            catch (error) {
                return (0, utils_1.FormateDate)({ error });
            }
        });
    }
    updatePostById(id, postInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.repository.updatePostById(id, postInput);
                return (0, utils_1.FormateDate)({ post });
            }
            catch (error) {
                return (0, utils_1.FormateDate)({ error });
            }
        });
    }
    deletePostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.repository.deletePostById(id);
                return (0, utils_1.FormateDate)({ post });
            }
            catch (error) {
                return (0, utils_1.FormateDate)({ error });
            }
        });
    }
}
exports.default = PostService;
