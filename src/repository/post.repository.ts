import { PostModel } from "../models";
import { PostInterface } from "../interface/post.interace";

class postRepository{
    async createPost(postInput: PostInterface){
        try{
            const post = await PostModel.create(postInput);
            return post;
        }catch(e){
            console.log("Error in postRepository.createPost: ", e);
            return null;
        }
    }

    async findPostById(id: string){
        try{
            const post = await PostModel.findById(id);
            return post;
        }catch(e){
            console.log("Error in postRepository.findPostById: ", e);
            return null;
        }
    }
    async findAllPost(){
        try{
            const post = await PostModel.find();
            return post;
        }catch(e){
            console.log("Error in postRepository.findAllPost: ", e);
            return null;
        }
    }

    async updatePostById(id: string, postInput: PostInterface){
        try{
            const post = await PostModel.findByIdAndUpdate(id, postInput, {new: true});
            return post;
        }catch(e){
            console.log("Error in postRepository.updatePostById: ", e);
            return null;
        }
    }

    async deletePostById(id: string){
        try{
            const post = await PostModel.findByIdAndDelete(id);
            return post;
        }catch(e){
            console.log("Error in postRepository.deletePostById: ", e);
            return null;
        }
    }
}
export default postRepository;