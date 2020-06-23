import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";

export default class Area extends Component {
  state = {
    areas: [],
    selectedArea: "",
    isLoading: true,
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

  render() {
    if (this.state.isLoading) return <Loader />;
    const { areas } = this.state;
    return (
      <main className="main">
        <form>
          <p>Choose an area:</p>
          <select>
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
      </main>
    );
  }
}
