import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin/Coin";
import NavBar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import Footer from "./components/Footer/Footer";
import Coinspage from "./pages/Coins/Coinspage";
import Exchanges from "./pages/ExchangesPage/ExchangesPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins" element={<Coinspage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/:uuid" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
