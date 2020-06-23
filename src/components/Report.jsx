import React, { Component } from "react";
import axios from "axios";
import { Map, Marker, TileLayer } from "react-leaflet";
import Loader from "./Loader";

export default class Report extends Component {
  state = {
    report: {},
    isLoading: true,
  };

  componentDidMount() {
    this.getReport();
  }

  getReport = () => {
    axios
      .get(
        `https://cmc-final-project.herokuapp.com/avalanche-reports/${this.props.report_id}`
      )
      .then(({ data }) => {
        this.setState({ report: data, isLoading: false });
      });
  };
  render() {
    if (this.state.isLoading) return <Loader />;
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
      <main>
        <Map center={[Latitude, Longitude]} zoom={8}>
          <Marker key={id} position={[Latitude, Longitude]} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
        <h2>Date: {Date}</h2>
        <h3>Area: {area.Name}</h3>
        <p>Time: {Time}</p>
        <p>Size: {Size}</p>
        <p>Age: {Age} hr(s)</p>
        <p>Elevation: {Elevation} m</p>
        <p>Trigger: {Trigger}</p>
        <p>Type: {Type}</p>
        <p>Aspect: {Aspect}</p>
      </main>
    );
  }
}
