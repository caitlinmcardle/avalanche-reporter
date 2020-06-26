import React, { Component } from "react";
import Loader from "./Loader";
import ReportCard from "./ReportCard";
import AreaMap from "./AreaMap";
import * as api from "../utils/api.js";
import AreaDropdown from "./AreaDropdown";

export default class Area extends Component {
  state = {
    areas: [],
    selectedAreaId: "1",
    isLoading: true,
    selectedReports: [],
    activeReport: null,
  };

  componentDidMount() {
    api.getAreas().then(({ data }) =>
      this.setState((currentState) => {
        return { areas: data, isLoading: false };
      })
    );
  }

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    api.getAreaReports(this.state.selectedAreaId).then(({ data }) =>
      this.setState((currentState) => {
        return { selectedReports: data };
      })
    );
  };

  handleInput = (inputEvent) => {
    const areaId = inputEvent.target.value;
    this.setState((currentState) => {
      return { selectedAreaId: areaId };
    });
  };

  setActiveReport = (report) => {
    this.setState((currentState) => {
      return { activeReport: report };
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { areas, selectedReports, activeReport } = this.state;
    return (
      <main className="main">
        <AreaMap
          selectedReports={selectedReports}
          activeReport={activeReport}
          setActiveReport={this.setActiveReport}
        />
        <form className="dropdown-form" onSubmit={this.handleSubmit}>
          <AreaDropdown areas={areas} handleInput={this.handleInput} />
          <button className="button-dropdown">Go</button>
        </form>

        {selectedReports.map((report) => {
          return <ReportCard key={report.id} {...report} />;
        })}
      </main>
    );
  }
}
