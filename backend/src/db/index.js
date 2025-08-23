import mongoose from "mongoose";

    const connectDB=async()=>{
  
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI }` )
        console.log("data base connected successfullly")
    } catch (error) {
        console.log("error while connecting database",error)
       process.exit(1)
    }

} 
export default connectDB