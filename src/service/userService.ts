import { userRepository } from "../repository";
import { userInterface } from "../interface/user.interface";
import { ValidatePassword, generateJwtToken ,hashPassword,FormateDate} from "../utils/utils";
import config from "../config/config";
import mongoose from "mongoose";

class UserService {
  private repository: userRepository;

  constructor() {
    this.repository = new userRepository();
  }

  async signIn(userInput: userInterface) {
    try {
      const { email, password } = userInput;
      const existingUser = await this.repository.findUserByEmail(email);
      if (!existingUser) {
        throw new Error("User does not exist");
      }
      const isPasswordValid = await ValidatePassword(
        existingUser.password,
        password,
        10
      );
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
      const token = generateJwtToken(
        existingUser._id,
        existingUser.email,
        config.server.jwtSecret || "jwtTOken",
        "1d"
      );
      return await FormateDate({id:existingUser._id,email:existingUser.email,token});
    } catch (error) {
        throw error;
    }
  }

  async signUp(userInput: userInterface) {
    try {
      let { email , username ,password} = userInput;
      const existingUser = await this.repository.findUserByEmail(email);
      if (existingUser) {
        throw new Error("User already exists");
      }
      const hashedPassword = await hashPassword(password, 10);
      userInput.password = hashedPassword;
      const user = await this.repository.createUser(userInput);
      if (!user) {
        throw new Error("User not created");
    }
      
      return  FormateDate({id:user._id,email:user.email});
    } catch (error) {
        return FormateDate({error});
    }
  }
  async getuserDetails(id:string){
    try{
      const user = await this.repository.findUserById(id);
      if(!user){
        throw new Error("User not found");
      }
      return FormateDate({user});
    }catch(e){
      return FormateDate({error:e});
    }
  }
  async updateProfile(id:string,username:string,bio:string){
    try{
      const user = await this.repository.findUserById(id);
      if(!user){
        throw new Error("User not found");
      }
      user.username = username;
      user.bio = bio;
      await user.save();
      return FormateDate({user});
    }catch(e){
      return FormateDate({error:e});
    }
  }
}
export default UserService;

