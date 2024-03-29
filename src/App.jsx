import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Index";
import { Route, Routes, Navigate } from "react-router-dom";
import Egc from "./Components/Home/Egc";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import RoadMapPage from "./Components/Home/RoadMapPage";
import Egax from "./Components/Home/Egax";
import Privacy from "./Components/PrivacyPolicy/Privacy";
import TermsAndConditions from "./Components/PrivacyPolicy/TermsAndConditions";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/egc/coin/info" element={<Egc />} />
        <Route path="/egax/coin/info" element={<Egax />} />
        <Route path="/about" element={<RoadMapPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
