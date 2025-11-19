import movieModel from "../Model/MovieModel.js"


let createMovie=async(req,res)=>{
    try{

        let {title,director,releaseYear,genre}=req.body
        
        let existedMovie=await movieModel.findOne({title:title})
        if(existedMovie){
            return res.status(401).json({success:false,message:"Movie Already Exist"})
        }
        let newMovie=await movieModel.create({title,director,releaseYear,genre})
return res.status(201).json({success:true,newMovie})


}catch(err){
    
    return res.status(500).json({success:false,message:`Internal Server Error: ${err}`})
    }


}


let fetchAllMovies=async(req,res)=>{

try{
let fetchedMovies=await movieModel.find()
if(!fetchedMovies){
    return res.status(404).json({success:false,message:"No Movies Found"})
}

return res.status(200).json({success:true,fetchedMovies})

}
catch(err){
    
    return res.status(5000).json({success:false,message:`Internal Server Error : ${err} `})

}

}



let fetchMovieById=async(req,res)=>{
try{

    let id=req.params.id
    let fetchedById=await movieModel.findOne({_id:id})
if(!fetchedById){
    return res.status(404).json({success:false,message:"Movie Not Found"})
}
return res.status(200).json({success:true,fetchedById})


}catch(err){
    
    return res.status(500).json({success:false,message:`Internal Server Error ${err}`})
}



}



let updateMovie=async(req,res)=>{

try{
    let upId=req.params.id
    let fetchedById=await movieModel.findOne({_id:upId})
if(!fetchedById){
    return res.status(404).json({success:false,message:"Movie Not Found"})
}
        let {title,director,releaseYear,genre}=req.body

await movieModel.findByIdAndUpdate(upId,{title,director,releaseYear,genre})
let updatedMovie=await movieModel.findOne({_id:upId})
return res.status(200).json({success:true,updatedMovie})
}catch(err){
    return res.status(500).json({success:false,message:`Internal Server Error : ${err}`})
}

}


let deleteMovie=async(req,res)=>{
 try{

     let delId=req.params.id
     let fetchedById=await movieModel.findOne({_id:delId})
     if(!fetchedById){
         return res.status(404).json({success:false,message:"Movie Not Found"})
        }
        
        await movieModel.findByIdAndDelete(delId)
        return res.status(200).json({success:true,message:"Movie Deleted Successfully"})


    }catch(err){
        
        return res.status(500).json({success:false,message:`Internal Server Error : ${err}` })
    }

}


export {createMovie,fetchAllMovies,fetchMovieById,updateMovie,deleteMovie}