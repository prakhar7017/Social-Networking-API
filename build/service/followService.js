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
const follow_repository_1 = __importDefault(require("../repository/follow.repository"));
const utils_1 = require("../utils/utils");
class FollowService {
    constructor() {
        this.followRepository = new follow_repository_1.default();
    }
    followUser(userId, targetUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.followRepository.followUser(userId, targetUserId);
                return (0, utils_1.FormateDate)({ result });
            }
            catch (error) {
                return (0, utils_1.FormateDate)({ error });
            }
        });
    }
    unfollowUser(userId, targetUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.followRepository.unfollowUser(userId, targetUserId);
                return (0, utils_1.FormateDate)({ result });
            }
            catch (error) {
                return (0, utils_1.FormateDate)({ error });
            }
        });
    }
}
exports.default = FollowService;
