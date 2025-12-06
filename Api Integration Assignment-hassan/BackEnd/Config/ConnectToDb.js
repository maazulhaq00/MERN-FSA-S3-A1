import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
let MydbUrl=process.env.dbUrl
let DatabaseConnection=async()=>{
try{
await mongoose.connect(MydbUrl)
console.log("Database Connected Successfully")
}catch(err){
    
    console.log("Error Occured : "+err)
}

}


export default DatabaseConnection