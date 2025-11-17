import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import DisplayMovie from "./pages/DisplayMovie"
import AddMovie from "./pages/AddMovie"
import Navbar from "./components/Navbar";


function App() {
  return ( 
    <>
    <Router>
      <Navbar/>
      <Routes>
   
        <Route path="/" element={<DisplayMovie/>} />
        <Route path="/add-movie" element={<AddMovie/>} />
      </Routes>
    </Router>
    </>
   );
}

export default App;