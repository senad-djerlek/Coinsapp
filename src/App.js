import "./App.css";
import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin/Coin";
import NavBar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:uuid" element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;
