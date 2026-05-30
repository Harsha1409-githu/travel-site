import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Admin from "./pages/Admin"

function App() {
  return (
    <div className="min-h-screen dark:bg-black dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App