import React from "react";

import logo from "./logo.svg";
import "./CalculatorView.css";

export default ({
  onRegularClick,
  onClearClick,
  onCEClick,
  onSumClick,
  selected
}) => (
  <div className="calculator">
    <div className="calculator__screen-container">
      <div className="calculator__screen">{selected}</div>
      <img className="calculator__logo" src={logo} alt="logo" />
    </div>
    <div className="calculator__body">
      <div className="calculator__button">
        <button onClick={onClearClick} data-test-id="clear">
          C
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onCEClick} data-test-id="ce">
          CE
        </button>
      </div>
      <div className="calculator__button">
        <button data-test-id="modulus">%</button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="/" data-test-id="divide">
          /
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="1" data-test-id="number-1">
          1
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="2" data-test-id="number-2">
          2
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="3" data-test-id="number-3">
          3
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="*" data-test-id="multiply">
          x
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="4" data-test-id="number-4">
          4
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="5" data-test-id="number-5">
          5
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="6" data-test-id="number-6">
          6
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="-" data-test-id="subtract">
          -
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="7" data-test-id="number-7">
          7
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="8" data-test-id="number-8">
          8
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="9" data-test-id="number-9">
          9
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="+" data-test-id="add">
          +
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="." data-test-id="decimal">
          .
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onRegularClick} value="0" data-test-id="number-0">
          0
        </button>
      </div>
      <div className="calculator__button">
        <button onClick={onSumClick} value="=" data-test-id="equals">
          =
        </button>
      </div>
      <div className="calculator__button" />
    </div>
  </div>
);
