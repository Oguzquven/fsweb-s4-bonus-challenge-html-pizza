import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import SiparisFormu from "./pages/SiparisFormu";
import SiparisOnay from "./pages/SiparisOnay";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/siparis-olustur" element={<SiparisFormu />} />
          <Route path="/siparis-onay" element={<SiparisOnay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
