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
const models_1 = require("../models");
class postRepository {
    createPost(postInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield models_1.PostModel.create(postInput);
                return post;
            }
            catch (e) {
                console.log("Error in postRepository.createPost: ", e);
                return null;
            }
        });
    }
    findPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield models_1.PostModel.findById(id);
                return post;
            }
            catch (e) {
                console.log("Error in postRepository.findPostById: ", e);
                return null;
            }
        });
    }
    findAllPost() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield models_1.PostModel.find();
                return post;
            }
            catch (e) {
                console.log("Error in postRepository.findAllPost: ", e);
                return null;
            }
        });
    }
    updatePostById(id, postInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield models_1.PostModel.findByIdAndUpdate(id, postInput, { new: true });
                return post;
            }
            catch (e) {
                console.log("Error in postRepository.updatePostById: ", e);
                return null;
            }
        });
    }
    deletePostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield models_1.PostModel.findByIdAndDelete(id);
                return post;
            }
            catch (e) {
                console.log("Error in postRepository.deletePostById: ", e);
                return null;
            }
        });
    }
}
exports.default = postRepository;
