import express from "express";
import dotenv from "dotenv"
import DatabaseConnection from "./Config/ConnectToDb.js";
import expressRouter from "./Router/MovieRouter.js";
import cors from "cors"
dotenv.config()
let app=express()
app.use(cors())
app.use(express.json())


DatabaseConnection()

app.use("/cinema",expressRouter)

let server=process.env.port

app.listen(server,()=>{
    console.log(`Server Is Running On localhost:${server}`)
})
