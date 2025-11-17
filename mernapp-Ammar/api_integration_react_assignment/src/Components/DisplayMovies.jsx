import axios from "axios";
import { useEffect, useState } from "react";

function DisplayMovies() {
   let apiUrl="http://localhost:5000/cinema"
let[movies,setMovies]=useState([])

let[alert,setAlert]=useState({
    status:true,
    message:""
})

   let fetchMovies=async()=>{
try{
    let res=await axios.get(`${apiUrl}/movies`)
console.log(res)

    if(res.data.success){

setMovies(res.data.fetchedMovies)

setAlert(
    {
        status:res.data.success,
        message:"Movies Fetched"
    }


)


}


}catch(err){

    setAlert(
    {
        status:err.response.data.success,
        message:err.response.data.message
    }
)

}

   }


   useEffect(()=>{
fetchMovies()

   },[])
   
   return (  
<>
<div className="container">
{   
alert.message &&
(
<div className={`alert ${alert.status?"alert-success":"alert-danger"}`} role="alert">
  {alert.message}
</div>
)

}

<div className="row">

    <div className="col-lg-12">
        <h2>All Movies</h2>
    </div>
    <div className="col-lg-12">

<table className="table table-bordered">

<thead>


<tr>
    <th>Title</th>
    <th>Director</th>
    <th>Release Year</th>
    <th>Genre</th>
    
</tr>
</thead>

<tbody>
{


movies.map((mov)=>{

return(
<tr key={mov._id} className="text-center">
    <td>{mov.title}</td>
    <td>{mov.director}</td>
    <td>{mov.releaseYear}</td>
    <td>{mov.genre}</td>
    
</tr>


)


})


}

</tbody>


</table>

    </div>
</div>

</div>


</>

    );
}

export default DisplayMovies;