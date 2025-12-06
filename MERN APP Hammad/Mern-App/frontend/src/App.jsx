import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import AddCategory from "./pages/AddCategory";
import DisplayCategories from "./pages/DisplayCategories";
function App() {
  return ( 
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/add-cat" element={<AddCategory/>} />
        <Route path="/display-cat" element={<DisplayCategories/>} />
      </Routes>
    </Router>
    </>
   );
}

export default App;