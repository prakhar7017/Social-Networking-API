import { postRepository } from "../repository";
import { FormateDate } from "../utils/utils";
import { PostInterface } from "../interface/post.interace";

class PostService {
    private repository: postRepository;

    constructor() {
        this.repository = new postRepository();
    }

    async createPost(postInput: PostInterface) {
        try {
            console.log("postInput",postInput);
            const post = await this.repository.createPost(postInput);
            console.log("post",post);
            return FormateDate({post});
        } catch (error) {
            return FormateDate({ error });
        }
    }

    async findPostById(id: string) {
        try {
            const post = await this.repository.findPostById(id);
            return  FormateDate({ post });
        } catch (error) {
            return FormateDate({ error });
        }
    }

    async findAllPost() {
        try {
            const post = await this.repository.findAllPost();
            return FormateDate({post});
        } catch (error) {
            return FormateDate({ error });
        }
    }

    async updatePostById(id: string,postInput: PostInterface) {
        try {
            const post = await this.repository.updatePostById(id,postInput);
            return FormateDate({post});
        } catch (error) {
            return FormateDate({ error });
        }
    }
    async deletePostById(id: string) {
        try {
            const post = await this.repository.deletePostById(id);
            return FormateDate({post});
        } catch (error) {
            return FormateDate({ error });
        }
    }
}

export default PostService;
