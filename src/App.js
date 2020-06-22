import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
    </div>
  );
}

export default App;
