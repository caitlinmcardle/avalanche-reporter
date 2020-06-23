import React, { Component } from "react";
import Loader from "./Loader";
import ReportCard from "./ReportCard";
import * as api from "../utils/api";

export default class ReportList extends Component {
  state = {
    reports: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getAllReports().then(({ data }) => {
      this.setState({ reports: data, isLoading: false });
    });
  }

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
