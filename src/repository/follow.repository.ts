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
            const follow = await FollowModel.findOne({ _user_id: userId });
            console.log(follow);
            if(!follow){
                const newFollow: NewFollow = {
                    _user_id: userId,
                    following: [targetUserId],
                    followers: []
                };
                const createdFollow = await FollowModel.create(newFollow);
                return createdFollow;
            }
            // Check if the user is already following the target user
            const existingFollow = follow.following.find((id) =>{
                return id.toString()===targetUserId;
            });

            if (existingFollow) {
                throw new Error('Already following the user');
            }

            await FollowModel.updateOne(
                { _user_id: userId },
                { $addToSet: { following: targetUserId } }
            );
            const updatedFollow = await FollowModel.findOne({ _user_id: userId });
            if(!updatedFollow){
                throw new Error('No follow found');
            }
            return updatedFollow;
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
            follow.following =  follow.following.filter((id)=>{
                return id.toString()!==targetUserId;
            });

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
