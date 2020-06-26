import React from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import { Link } from "@reach/router";

export default function AreaMap({
  selectedReports,
  activeReport,
  setActiveReport,
}) {
  return (
    <section>
      <Map center={[51.3, -118.5]} zoom={5}>
        {selectedReports.map((report) => (
          <Marker
            key={report.id}
            position={[report.Latitude, report.Longitude]}
            onClick={() => {
              setActiveReport(report);
            }}
          />
        ))}
        {activeReport && (
          <Popup
            position={[activeReport.Latitude, activeReport.Longitude]}
            onClose={() => {
              setActiveReport(null);
            }}
          >
            <div>
              <p>Date: {activeReport.Date}</p>
              <p>Time: {activeReport.Time.slice(0, 5)}</p>
              <Link to={`/reports/${activeReport.id}`}>
                <p>Full report</p>
              </Link>
            </div>
          </Popup>
        )}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </section>
  );
}
