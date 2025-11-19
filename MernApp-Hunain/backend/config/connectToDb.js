import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

const connectToDb = async() =>{
try{
    await mongoose.connect(process.env.DB_URL)
    console.log("connected to db successfully");  
}
catch(err){
    console.log("Db connection failed",err);
    
}
}
export default connectToDb
