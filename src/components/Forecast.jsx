import React, { Component } from "react";
import AreaDropdown from "./AreaDropdown";
import Loader from "./Loader";
import ErrorDisplayer from "./ErrorDisplayer";
import * as api from "../utils/api.js";

export default class Forecast extends Component {
  state = {
    forecasts: [],
    areas: [],
    selectedAreaId: "1",
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    api.getAreas().then(({ data }) =>
      this.setState((currentState) => {
        return { areas: data, isLoading: false };
      })
    );
  }

  handleInput = (inputEvent) => {
    const areaId = inputEvent.target.value;
    this.setState((currentState) => {
      return { selectedAreaId: areaId };
    });
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    api
      .getForecast(this.state.selectedAreaId)
      .then(({ data }) =>
        this.setState((currentState) => {
          return { forecasts: data };
        })
      )
      .catch((error) =>
        this.setState({ err: "Sorry we can't find a forecast for this area" })
      );
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { areas, forecasts, err } = this.state;
    if (err) return <ErrorDisplayer err={err} />;

    return (
      <main className="main">
        <h2>Find a forecast:</h2>
        <form className="dropdown-form" onSubmit={this.handleSubmit}>
          <AreaDropdown areas={areas} handleInput={this.handleInput} />
          <button className="button-dropdown">Go</button>
        </form>
        <table className="forecast-table">
          <tr>
            <th>Mountain Area</th>
            <th>Danger Level</th>
            <th>Advice</th>
          </tr>

          {forecasts.map(({ danger_level, mountain_area }) => (
            <tr>
              <td>{mountain_area}</td>
              <td>{danger_level.name}</td>
              <td>{danger_level.advice}</td>
            </tr>
          ))}
        </table>
      </main>
    );
  }
}
