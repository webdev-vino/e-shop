
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login";
import {Routes, Route} from "react-router-dom";
import Signup from "./components/SignUp";


function App() {
  return (
    <div>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Body />} />
    </Routes>
    </div>
  );
}

export default App;
