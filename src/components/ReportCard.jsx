import React from "react";
import { Link } from "@reach/router";

export default function ReportCard({ id, Date, area, Size }) {
  return (
    <article key={id}>
      <Link to={`/reports/${id}`}>
        <h4>Date: {Date}</h4>
      </Link>
      <p>Area: {area.Name}</p>
      <p>Size: {Size}</p>
    </article>
  );
}
