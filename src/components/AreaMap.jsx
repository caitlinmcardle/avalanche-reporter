import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

export default function AreaMap({ selectedReports }) {
  return (
    <section>
      <Map center={[50.3, -119.2]} zoom={6}>
        {selectedReports.map((report) => (
          <Marker
            key={report.id}
            position={[report.Latitude, report.Longitude]}
            // onClick={() => {
            //   setActiveReport(report);
            // }}
          />
        ))}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </section>
  );
}
