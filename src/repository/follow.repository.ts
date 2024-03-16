import { FollowModel } from '../models';
import { IFollow } from '../models/followSchema'; 

interface NewFollow {
    _user_id: string;
    following: string[];
    followers: string[];
}

class FollowRepository {
    async followUser(userId: string, targetUserId: string): Promise<IFollow> {
        try {
            const existingFollow = await FollowModel.findOne({ _user_id: userId, following: targetUserId });

            if (existingFollow) {
                throw new Error('Already following the user');
            }

            const newFollow: NewFollow = {
                _user_id: userId,
                following: [targetUserId],
                followers: []
            };

            const doc = await FollowModel.create(newFollow);
            return doc;
        } catch (error) {
            console.error('Error in followUser:', error);
            throw error; 
        }
    }

    async unfollowUser(userId: string, targetUserId: string){
        try {
            const follow = await FollowModel.findOne({ _user_id: userId });

            if (!follow) {
                throw new Error('User is not following anyone');
            }

            follow.following =  follow.following.filter(id => id !== targetUserId);
            console.log(follow.following);

            await follow.save();
            const result =await FollowModel.findOne({ _user_id: userId });
            return result;
        } catch (error) {
            console.error('Error in unfollowUser:', error);
            throw error;
        }
    }
}

export default FollowRepository;
