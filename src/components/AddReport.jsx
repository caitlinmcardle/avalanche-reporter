import React, { Component } from "react";

export default class AddReport extends Component {
  state = {};

  handleInput = () => {};

  render() {
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
          <label>
            Area
            <input
              type="text"
              name="area"
              onChange={this.handleInput}
              required
            />
          </label>
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
