import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Product from "./pages/Product";
import Industry from "./pages/Industy";
import Footer from "./components/Footer";
import OmniRoad from "./pages/OmniRoad";
import CrowdIQ from "./pages/CrowdIQ";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build-your-vision" element={<Contact />} />
        <Route path="/product/:text" element={<Product />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/omniroad/" element={<OmniRoad />} />

        <Route path="/crowdiq/" element={<CrowdIQ />} />
      </Routes>

      <Footer />
    </Router>
  );
}
