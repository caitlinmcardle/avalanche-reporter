import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Area from "./components/Area";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router>
        <Area path="/" />
      </Router>
    </div>
  );
}

export default App;
