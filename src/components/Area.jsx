import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import ReportCard from "./ReportCard";

export default class Area extends Component {
  state = {
    areas: [],
    selectedAreaId: "1",
    isLoading: true,
    selectedReports: [],
  };

  componentDidMount() {
    this.getAreas();
  }

  getAreas = () => {
    axios
      .get("https://cmc-final-project.herokuapp.com/areas")
      .then(({ data }) =>
        this.setState((currentState) => {
          return { areas: data, isLoading: false };
        })
      );
  };

  getAreaReports = () => {
    axios
      .get(
        `https://cmc-final-project.herokuapp.com/avalanche-reports/?area.id=${this.state.selectedAreaId}`
      )
      .then(({ data }) =>
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

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    this.getAreaReports();
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
