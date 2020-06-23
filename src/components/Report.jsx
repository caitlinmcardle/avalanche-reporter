import React, { Component } from "react";
import axios from "axios";
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
      Date,
      Time,
      Age,
      Size,
      Elevation,
      Trigger,
      Type,
      area,
      Aspect,
    } = this.state.report;
    return (
      <main>
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
