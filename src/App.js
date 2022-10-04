import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin/Coin";
import NavBar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import Footer from "./components/Footer/Footer";
import Exchanges from "./pages/Coin/ExchangesPage/ExchangesPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/:uuid" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
