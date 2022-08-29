import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Wave from "./Wave/Wave";
import WaveList from "./WaveList/WaveList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WaveList />
      <Wave />
    </div>
  );
}

export default App;
