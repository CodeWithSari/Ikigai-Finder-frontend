import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Welcome from "./pages/Welcome";
import AccountSetup from "./pages/AccountSetup";
import Home from "./pages/Home";
import Results from "./pages/Results";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
  
      <Header />

      <main className="min-h-[80vh]">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Welcome />} />

          {/* Account Setup */}
          <Route path="/accountsetup" element={<AccountSetup />} />

          {/* Main Ikigai Finder (Stepper + Chart page) */}
          <Route path="/home" element={<Home />} />

          {/* Saved Ikigai Results */}
          <Route path="/results" element={<Results />} />

          {/* 404 Fallback */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
