import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='sign-in' element={<Signin/>}/>
          <Route path='register' element={<Register/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
