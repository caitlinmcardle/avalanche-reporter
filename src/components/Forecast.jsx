import React, { Component } from "react";
import AreaDropdown from "./AreaDropdown";
import Loader from "./Loader";
import * as api from "../utils/api.js";

export default class Forecast extends Component {
  state = { forecasts: [], areas: [], selectedAreaId: "1", isLoading: true };

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
    api.getForecast(this.state.selectedAreaId).then(({ data }) =>
      this.setState((currentState) => {
        return { forecasts: data };
      })
    );
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { areas, forecasts } = this.state;

    return (
      <main className="main">
        <h2>Find a forecast:</h2>
        <form className="dropdown-form" onSubmit={this.handleSubmit}>
          <AreaDropdown areas={areas} handleInput={this.handleInput} />
          <button>Go</button>
        </form>
        {forecasts.map(({ id, danger_level, mountain_area }) => (
          <article key={id}>
            <h3>
              {mountain_area}: {danger_level.name}
            </h3>
            <p>{danger_level.advice}</p>
          </article>
        ))}
      </main>
    );
  }
}
