import React from "react";
import "./App.css";

import CalculatorView from "./CalculatorView";

class App extends React.Component {
  state = {
    selected: ""
  };

  clear = () => {
    if (this.state.selected.length === 0) return;

    this.setState({ selected: "" });
  };

  deleteLast = () => {
    if (this.state.selected.length === 0) return;

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
    if (this.state.selected.length === 0) return;

    // noted eval has security risks but can be sure of input in this
    // case, as it is determined purely on the button presses from within app
    /* eslint-disable-next-line */
    return eval(this.state.selected);
  };

  render() {
    return (
      <div className="App">
        <CalculatorView
          onRegularClick={this.update}
          onClearClick={this.clear}
          onCEClick={this.deleteLast}
          onSumClick={this.calculate}
        />
      </div>
    );
  }
}

export default App;
