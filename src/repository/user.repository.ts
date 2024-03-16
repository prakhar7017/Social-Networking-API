import { UserModel } from "../models"; 

class userRepository{

    async findUserByEmail(email: string){
        try{
            const user = await UserModel.findOne({email});
            return user;
        }catch(e){
            console.log("Error in userRepository.findUserByEmail: ", e);
            throw e;
        }
    }
    async createUser(userInput: any){
        try{
            const user = await UserModel.create(userInput);
            return user;
        }catch(e){
            console.log("Error in userRepository.createUser: ", e);
            return null;
        }
    }
    async findUserById(id: string){
        try{
            const user = await UserModel.findById(id);
            return user;
        }catch(e){
            console.log("Error in userRepository.findUserById: ", e);
            return null;
        }
    }
}
export default userRepository;