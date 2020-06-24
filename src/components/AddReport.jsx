import React, { Component } from "react";
import axios from "axios";
import * as api from "../utils/api";
import Loader from "./Loader";
import AreaDropdown from "./AreaDropdown";

export default class AddReport extends Component {
  state = { isLoading: true };

  componentDidMount() {
    api.getAreas().then(({ data }) =>
      this.setState((currentState) => {
        return { areas: data, isLoading: false };
      }, console.log(this.state))
    );
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState(
      (currentState) => {
        return { [name]: value };
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://cmc-final-project.herokuapp.com/avalanche-reports", {
        area: this.state.area,
        Date: this.state.Date,
        Time: `${this.state.Time}:00`,
        Size: this.state.Size,
        Age: this.state.Age,
        Elevation: this.state.Elevation,
        Trigger: this.state.Trigger,
        Type: this.state.Type,
        Aspect: this.state.Aspect,
        Depth: this.state.Depth,
        Width: this.state.Width,
        Path: this.state.Path,
        Latitude: this.state.Latitude,
        Longitude: this.state.Longitude,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.dir(error));
    this.setState({ isLoading: true });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { areas } = this.state;
    return (
      <main className="main">
        <h2>Report an Avalanche:</h2>
        <form className="add-report-form" onSubmit={this.handleSubmit}>
          <AreaDropdown areas={areas} handleInput={this.handleInput} />
          <label>
            Date
            <input
              type="date"
              name="Date"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Time
            <input
              type="time"
              name="Time"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Size
            <input
              type="float"
              name="Size"
              onChange={this.handleInput}
              required
            />
          </label>

          <label>
            Age
            <input
              type="number"
              name="Age"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Elevation
            <input
              type="text"
              name="Elevation"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Trigger
            <input
              type="text"
              name="Trigger"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Type
            <input
              type="text"
              name="Type"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Aspect
            <input
              type="text"
              name="Aspect"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Depth
            <input
              type="number"
              name="Depth"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Width
            <input
              type="number"
              name="Width"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Path
            <input
              type="number"
              name="Path"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Latitude
            <input
              type="float"
              name="Latitude"
              onChange={this.handleInput}
              required
            />
          </label>
          <label>
            Longitude
            <input
              type="float"
              name="Longitude"
              onChange={this.handleInput}
              required
            />
          </label>
          <button className="form-button" type="submit">
            Add Report
          </button>
        </form>
      </main>
    );
  }
}
