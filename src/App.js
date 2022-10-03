import "./App.css";
import Search from "./components/Search/Search";
import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:uuid" element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;
