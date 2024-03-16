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
class FollowRepository {
    followUser(userId, targetUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const follow = yield models_1.FollowModel.findOne({ _user_id: userId });
                console.log(follow);
                if (!follow) {
                    const newFollow = {
                        _user_id: userId,
                        following: [targetUserId],
                        followers: []
                    };
                    const createdFollow = yield models_1.FollowModel.create(newFollow);
                    return createdFollow;
                }
                // Check if the user is already following the target user
                const existingFollow = follow.following.find((id) => {
                    return id.toString() === targetUserId;
                });
                if (existingFollow) {
                    throw new Error('Already following the user');
                }
                yield models_1.FollowModel.updateOne({ _user_id: userId }, { $addToSet: { following: targetUserId } });
                const updatedFollow = yield models_1.FollowModel.findOne({ _user_id: userId });
                if (!updatedFollow) {
                    throw new Error('No follow found');
                }
                return updatedFollow;
            }
            catch (error) {
                console.error('Error in followUser:', error);
                throw error;
            }
        });
    }
    unfollowUser(userId, targetUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const follow = yield models_1.FollowModel.findOne({ _user_id: userId });
                if (!follow) {
                    throw new Error('User is not following anyone');
                }
                follow.following = follow.following.filter((id) => {
                    return id.toString() !== targetUserId;
                });
                yield follow.save();
                const result = yield models_1.FollowModel.findOne({ _user_id: userId });
                return result;
            }
            catch (error) {
                console.error('Error in unfollowUser:', error);
                throw error;
            }
        });
    }
}
exports.default = FollowRepository;
