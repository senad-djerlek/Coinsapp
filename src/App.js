import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin/Coin";
import NavBar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import Footer from "./components/Footer/Footer";
import Coinspage from "./pages/Coins/Coinspage";
import Exchanges from "./pages/ExchangesPage/ExchangesPage";
import Favourite from "./pages/FavouritePage/Favourite";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins" element={<Coinspage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins/:uuid" element={<Coin />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
