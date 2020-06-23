import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import ReportCard from "./ReportCard";

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
          return <ReportCard key={report.id} {...report} />;
        })}
      </main>
    );
  }
}
