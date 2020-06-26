import React, { Component } from "react";
import Loader from "./Loader";
import ReportCard from "./ReportCard";
import * as api from "../utils/api";
import ErrorDisplayer from "./ErrorDisplayer";

export default class ReportList extends Component {
  state = {
    reports: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    api
      .getAllReports()
      .then(({ data }) => {
        this.setState({ reports: data, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err });
      });
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    const { err, reports } = this.state;
    if (err) return <ErrorDisplayer />;
    return (
      <main className="main">
        <h2>All Avalanche Reports</h2>
        {reports.map((report) => {
          return <ReportCard key={report.id} {...report} />;
        })}
      </main>
    );
  }
}
