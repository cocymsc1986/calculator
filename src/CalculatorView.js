import React from "react";

import styles from "./CalculatorView.styles.js";

export default ({
  onRegularClick,
  onClearClick,
  onCEClick,
  onSumClick,
  selected
}) => (
  <div styles={styles.calculatorWrapper}>
    <div styles={styles.screen}>{selected}</div>
    <button onClick={onClearClick} data-test-id="clear">
      C
    </button>
    <button onClick={onCEClick} data-test-id="ce">
      CE
    </button>
    <button data-test-id="modulus">%</button>
    <button onClick={onRegularClick} value="/" data-test-id="divide">
      /
    </button>
    <button onClick={onRegularClick} value="1" data-test-id="number-1">
      1
    </button>
    <button onClick={onRegularClick} value="2" data-test-id="number-2">
      2
    </button>
    <button onClick={onRegularClick} value="3" data-test-id="number-3">
      3
    </button>
    <button onClick={onRegularClick} value="*" data-test-id="multiply">
      x
    </button>
    <button onClick={onRegularClick} value="4" data-test-id="number-4">
      4
    </button>
    <button onClick={onRegularClick} value="5" data-test-id="number-5">
      5
    </button>
    <button onClick={onRegularClick} value="6" data-test-id="number-6">
      6
    </button>
    <button onClick={onRegularClick} value="-" data-test-id="subtract">
      -
    </button>
    <button onClick={onRegularClick} value="7" data-test-id="number-7">
      7
    </button>
    <button onClick={onRegularClick} value="8" data-test-id="number-8">
      8
    </button>
    <button onClick={onRegularClick} value="9" data-test-id="number-9">
      9
    </button>
    <button onClick={onRegularClick} value="+" data-test-id="add">
      +
    </button>
    <button onClick={onRegularClick} value="." data-test-id="decimal">
      .
    </button>
    <button onClick={onRegularClick} value="0" data-test-id="number-0">
      0
    </button>
    <button onClick={onSumClick} value="=" data-test-id="equals">
      =
    </button>
  </div>
);
