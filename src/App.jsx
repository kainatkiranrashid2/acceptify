// import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurClients from "./components/OurClients/OurClients";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router className="">
      <div className="custom-gradient">
        <Navbar />

        <main className="overflow-hidden m-0 p-0   text-dark -z-10 isolate">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<OurClients />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
