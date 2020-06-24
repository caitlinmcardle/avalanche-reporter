import React, { Component } from "react";
import Loader from "./Loader";
import ReportCard from "./ReportCard";
import AreaMap from "./AreaMap";
import * as api from "../utils/api.js";

export default class Area extends Component {
  state = {
    areas: [],
    selectedAreaId: "1",
    isLoading: true,
    selectedReports: [],
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
      this.setState(
        (currentState) => {
          return { selectedReports: data };
        },
        () => {
          console.log(this.state);
        }
      )
    );
  };

  handleInput = (inputEvent) => {
    const areaId = inputEvent.target.value;
    this.setState(
      (currentState) => {
        return { selectedAreaId: areaId };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { areas, selectedReports } = this.state;
    return (
      <main className="main">
        <AreaMap selectedReports={selectedReports} />
        <form className="form" onSubmit={this.handleSubmit}>
          <p>Choose an area:</p>
          <select name="area" onChange={this.handleInput}>
            {areas.map((area) => {
              return (
                <option key={area.id} value={area.id}>
                  {area.Name}
                </option>
              );
            })}
          </select>
          <button>Go</button>
        </form>
        {selectedReports.map((report) => {
          return <ReportCard key={report.id} {...report} />;
        })}
      </main>
    );
  }
}
