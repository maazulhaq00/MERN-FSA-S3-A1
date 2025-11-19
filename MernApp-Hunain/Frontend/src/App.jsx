import NavBar from "../components/NavBar";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import AddMovie from "./Pages/AddMovie";
import DisplayMovies from "./Pages/DisplayMovie";

function App() {
  return ( 
  <>  
<Router>
  <NavBar/>
  <Routes>
    <Route path="/add-movie" element={<AddMovie/>}/>
    <Route path="/display-movie" element={<DisplayMovies/>}/>
  </Routes>
</Router>
  </> 
  );
}

export default App;