import React, { Component } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import Loader from "./Loader";
import * as api from "../utils/api";
import ErrorDisplayer from "./ErrorDisplayer";

export default class Report extends Component {
  state = {
    report: {},
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    api
      .getOneReport(this.props.report_id)
      .then(({ data }) => {
        this.setState({ report: data, isLoading: false });
      })
      .catch((error) => {
        this.setState({
          err: `Sorry, we can't find a report with ID ${this.props.report_id}`,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    const { err } = this.state;
    if (err) return <ErrorDisplayer err={err} />;
    const {
      id,
      Date,
      Time,
      Age,
      Size,
      Elevation,
      Trigger,
      Type,
      area,
      Aspect,
      Latitude,
      Longitude,
    } = this.state.report;
    return (
      <main className="main">
        <Map center={[Latitude, Longitude]} zoom={8}>
          <Marker key={id} position={[Latitude, Longitude]} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
        <h2>Date: {Date}</h2>
        <h3>Area: {area.Name}</h3>
        <p>Time: {Time.slice(0, 5)}</p>
        <p>Size: {Size}</p>
        <p>Age: {Age} hr(s)</p>
        <p>Elevation: {Elevation} m</p>
        <p>Trigger: {Trigger}</p>
        <p>Type: {Type}</p>
        <p>Aspect: {Aspect}</p>
        <p>
          Coordinates: [{Latitude}, {Longitude}]
        </p>
      </main>
    );
  }
}
