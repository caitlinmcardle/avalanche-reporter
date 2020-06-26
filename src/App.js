import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Area from "./components/Area";
import ReportList from "./components/ReportList";
import AddReport from "./components/AddReport";
import Forecast from "./components/Forecast";
import Report from "./components/Report";
import ErrorDisplayer from "./components/ErrorDisplayer";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router className="router">
        <Area path="/" />
        <ReportList path="/reports" />
        <AddReport path="/add-report" />
        <Forecast path="forecast" />
        <Report path="/reports/:report_id" />
        <ErrorDisplayer default />
      </Router>
    </div>
  );
}

export default App;
