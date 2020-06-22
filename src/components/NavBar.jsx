import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>Home</li>
        <li>Forecasts</li>
        <li>Report an Avalanche</li>
      </ul>
    </nav>
  );
}
