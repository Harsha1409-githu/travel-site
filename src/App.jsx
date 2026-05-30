import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingSocialDock from "./components/FloatingSocialDock";

function App() {
  return (
    <div className="min-h-screen dark:bg-black dark:text-white">

      {/* TOP NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {/* FLOATING UI LAYERS */}
      <FloatingSocialDock />
      <BottomNav />
      <FloatingWhatsApp />

    </div>
  );
}

export default App;