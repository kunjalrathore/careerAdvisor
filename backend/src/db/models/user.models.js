import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

},  {
        timestamps:true
    })

    // function hash password before save
    userSchema.pre("save",async function (next) {
        if(!this.isModified("password")){
            return next();
        }
        this.password=await bcrypt.hash(this.password,8)
        next();
        
    })
//  function to check password is correct or not
userSchema.methods.isPasswodCorrect=async function (password) {
    const result=await bcrypt.compare(password,this.password)
    return result;
    
}

export const User=mongoose.model("User",userSchema)