import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserRequest } from '../interface/user.interface';

export const GenPassword=async (password:string,salt:number):Promise<string>=>{
    return await bcrypt.hash(password,salt);
}

export const ValidatePassword=async (savedPass:string,enteredPass:string,salt:number):Promise<boolean>=>{
    return (await bcrypt.compare(enteredPass,savedPass));
}

export const generateJwtToken = (id: string, email: string, secretKey: string, expiresIn?: string | number): string => {
    try {
        const payload = {
            _id:id,
            email
        };

        return jwt.sign(payload, secretKey, { expiresIn });
    } catch (error) {
        throw new Error('Error generating JWT token');
    }
};

export const hashPassword = async (password: string, saltRounds: number = 10): Promise<string> => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);

        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};
export const validateJwtToken = (token: string,secret:string):  UserRequest | null => {
    try {
        const decoded = jwt.verify(token,secret) as UserRequest;
        return decoded;
    } catch (error) {
        return null;
    }
};

export const FormateDate=(data:any):{data:any}=>{
    if(data){
        return {data};
    }else{
        throw new Error("No Data Found");
    }
}