import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import AddMovie from "./Views/AddMovie";
import DisplayMovie from "./Views/DisplayMovie";
import EditMovie from "./Views/EditMovie";


function Appp() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<AddMovie />} />
        <Route path="/displaymovies" element={<DisplayMovie />} />
                <Route path="/editmovie/:id" element={<EditMovie />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Appp;
