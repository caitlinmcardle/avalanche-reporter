import React, { Component } from "react";
import axios from "axios";
import * as api from "../utils/api";
import Loader from "./Loader";

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
        ...this.state,
      })
      .then(({ data }) => {
        console.log(data);
      });
    this.setState({ isLoading: true });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { areas } = this.state;
    return (
      <main className="main">
        <h2>Report an Avalanche:</h2>
        <form className="add-report-form">
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
          <p className="add-dropdown-label">Choose an area:</p>
          <select
            className="add-report-dropdown"
            name="area_id"
            onChange={this.handleInput}
          >
            {areas.map((area) => {
              return (
                <option key={area.id} value={area.id}>
                  {area.Name}
                </option>
              );
            })}
          </select>
          <label>
            Age
            <input type="number" name="Age" onChange={this.handleInput} />
          </label>
          <label>
            Elevation
            <input
              type="number"
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
            <input type="text" name="Depth" onChange={this.handleInput} />
          </label>
          <label>
            Width
            <input type="text" name="Width" onChange={this.handleInput} />
          </label>
          <label>
            Path
            <input type="text" name="Path" onChange={this.handleInput} />
          </label>
          <label>
            Latitude
            <input
              type="float"
              name="Latitdue"
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
