import mongoose, { model } from "mongoose";

let MovieSchema=mongoose.Schema({
title:{
    type:String,
    required:true
},
director:{
    type:String,
    required:true
},
releaseYear:{
    type:String,
    required:true
},
genre:{
    type:String,
    required:true
},


})

let movieModel=mongoose.model("movies",MovieSchema)

export default movieModel
