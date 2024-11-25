import React from "react";
import Header from "./Component/Header";
import SIPCalculator from "./Component/SIPCalaculator";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SIPCalculator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
