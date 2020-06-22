import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link key="home" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link key="forecasts" to="/forecast">
            Forecasts
          </Link>
        </li>
        <Link key="addAvalanche" to="/add-report">
          <li>Report an Avalanche</li>
        </Link>
        <Link key="reportList" to="/reports">
          <li>All Avalanche Reports</li>
        </Link>
      </ul>
    </nav>
  );
}
