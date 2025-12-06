import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectToDb from './config/connectToDb.js'

import movieRouter from './routes/movieRouter.js'

dotenv.config()
const app= express()
app.use(express.json())
app.use(cors())

connectToDb();


app.get("/",(req,res)=>{
    return res.status(200).json({message: "welcome to app"})
})

app.use("/movies",movieRouter)

app.listen(process.env.PORT,() =>{
    console.log(`App running: http://localhost:${process.env.PORT}`);
    
})