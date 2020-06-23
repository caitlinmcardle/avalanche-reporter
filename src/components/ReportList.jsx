import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";

export default class ReportList extends Component {
  state = {
    reports: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getReports();
  }

  getReports = () => {
    axios
      .get("https://cmc-final-project.herokuapp.com/avalanche-reports")
      .then(({ data }) => {
        this.setState({ reports: data, isLoading: false }, () => {
          console.log(this.state);
        });
      });
  };
  render() {
    if (this.state.isLoading) return <Loader />;
    const { reports } = this.state;
    return (
      <main>
        <h2>All Avalanche Reports</h2>
        {reports.map((report) => {
          return (
            <article key={report.id}>
              <h4>Date: {report.Date}</h4>
              <p>Area: {report.area.Name}</p>
              <p>Size: {report.Size}</p>
            </article>
          );
        })}
      </main>
    );
  }
}
