import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="nav-link" key="home" to="/">
            Home
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" key="forecasts" to="/forecast">
            Forecasts
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" key="addAvalanche" to="/add-report">
            Report an Avalanche
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" key="reportList" to="/reports">
            All Avalanche Reports
          </Link>
        </li>
      </ul>
    </nav>
  );
}
