import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    selected: null
  };

  clear = () => {
    this.setState({ selected: null });
  };

  deleteLast = () => {
    this.setState(state => ({
      selected: state.selected.substring(0, state.selected.length - 1)
    }));
  };

  update = e => {
    if (!e) return;
    const value = e.target.value;

    this.setState(state => ({
      selected: `${state.selected}${value}`
    }));
  };

  calculate = () => {
    if (!this.state.selected) return;

    // noted eval has security risks but can be sure of input in this
    // case, as it is determined purely on the button presses from within app
    /* eslint-disable-next-line */
    return eval(this.state.selected);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
