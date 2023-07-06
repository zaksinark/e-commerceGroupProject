import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import ShoppingCart from "./views/ShoppingCart.jsx";
import TrackOrder from "./views/TrackOrder";
import LoginAndReg from "./views/LoginAndReg.jsx";
import ContactUsForm from "./components/ContactUsForm";
import Welcome from "./views/Welcome";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/account" element={<LoginAndReg />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
