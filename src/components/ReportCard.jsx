import React from "react";

export default function ReportCard({ id, Date, area, Size }) {
  return (
    <article key={id}>
      <h4>Date: {Date}</h4>
      <p>Area: {area.Name}</p>
      <p>Size: {Size}</p>
    </article>
  );
}
