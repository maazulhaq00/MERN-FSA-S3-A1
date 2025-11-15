import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import AddMovie from "./Components/AddMovie";
import DisplayMovies from "./Components/DisplayMovies";
import Navbar from "./Components/Navbar";
function App() {
  return (  

<>

<Router>
<Navbar/>
<Routes>

  <Route path="/" element={<AddMovie/>}/>
  <Route path="/displaymovies" element={<DisplayMovies/>}/>

</Routes>

</Router>

</>

  );
}

export default App;