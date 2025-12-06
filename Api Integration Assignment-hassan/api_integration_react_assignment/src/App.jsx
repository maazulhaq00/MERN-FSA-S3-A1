import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import AddMovie from "./Components/AddMovie";
function App() {
  return (  

<>


<Router>
<Routes>

  <Route path="/" element={<AddMovie/>}/>
</Routes>

</Router>

</>

  );
}

export default App;