import React, { Component } from "react";
import AreaDropdown from "./AreaDropdown";
import Loader from "./Loader";
import * as api from "../utils/api.js";

export default class Forecast extends Component {
  state = { forecast: {}, areas: [], selectedAreaId: "", isLoading: true };

  componentDidMount() {
    api.getAreas().then(({ data }) =>
      this.setState((currentState) => {
        return { areas: data, isLoading: false };
      })
    );
  }

  handleInput = (inputEvent) => {
    const areaId = inputEvent.target.value;
    this.setState(
      (currentState) => {
        return { selectedAreaId: areaId };
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    api.getForecast(this.state.selectedAreaId).then(({ data }) =>
      this.setState(
        (currentState) => {
          return { forecast: data };
        },
        () => console.log(this.state)
      )
    );
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { areas } = this.state;

    return (
      <main className="main">
        <h2>Find a forecast:</h2>
        <form className="dropdown-form" onSubmit={this.handleSubmit}>
          <AreaDropdown areas={areas} handleInput={this.handleInput} />
          <button>Go</button>
        </form>
      </main>
    );
  }
}
