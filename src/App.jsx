import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Index";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./Components/Header/Header";
function App() {
  return (
    // <ParallaxProvider>
    <div className="App">
      <Header />
      <Home />
    </div>
    // </ParallaxProvider>
  );
}

export default App;
