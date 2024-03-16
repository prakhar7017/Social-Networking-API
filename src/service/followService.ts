import FollowRepository from '../repository/follow.repository'
import { FormateDate } from '../utils/utils';

class FollowService {
    private followRepository: FollowRepository;

    constructor() {
        this.followRepository = new FollowRepository();
    }

    async followUser(userId: string, targetUserId: string){
        try {
            const result=await this.followRepository.followUser(userId, targetUserId);
            return FormateDate({result});
        } catch (error) {
            return FormateDate({error});
        }
    }

    async unfollowUser(userId: string, targetUserId: string){
        try {
            const result=await this.followRepository.unfollowUser(userId, targetUserId);
            return FormateDate({result});
        } catch (error) {
            return FormateDate({error});
        }
    }
}

export default FollowService;
