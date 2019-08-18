import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("should render without crashing", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.length).toBe(1);
});

describe("main functions", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  describe("clear", () => {
    it("should clear state", () => {
      wrapper.setState({
        selected: "1+1"
      });

      wrapper.instance().clear();

      expect(wrapper.state("selected")).toBe(null);
    });
  });

  describe("deleteLast", () => {
    it("should delete last character in state", () => {
      wrapper.setState({
        selected: "1+1"
      });

      wrapper.instance().deleteLast();

      expect(wrapper.state("selected")).toBe("1+");
    });
  });

  describe("update", () => {
    it("should add value to state", () => {
      wrapper.setState({
        selected: "1+"
      });

      wrapper.instance().add({ target: { value: "1" } });

      expect(wrapper.state("selected")).toBe("1+1");
    });
  });

  describe("calculate", () => {
    it("should calculate string in state and return sum for addition", () => {
      wrapper.setState({
        selected: "1+1"
      });

      const result = wrapper.instance().calculate();

      expect(result).toBe(2);
    });

    it("should calculate string in state and return sum for subtraction", () => {
      wrapper.setState({
        selected: "2-1"
      });

      const result = wrapper.instance().calculate();

      expect(result).toBe(1);
    });

    it("should calculate string in state and return sum for multiplication", () => {
      wrapper.setState({
        selected: "2*2"
      });

      const result = wrapper.instance().calculate();

      expect(result).toBe(4);
    });

    it("should calculate string in state and return sum for division", () => {
      wrapper.setState({
        selected: "8/2"
      });

      const result = wrapper.instance().calculate();

      expect(result).toBe(4);
    });
  });
});
