import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

it("should render without crashing", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.length).toBe(1);
});

describe("main functions", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  describe("clear", () => {
    it("should do nothing if no selected state", () => {
      wrapper.instance().setState({
        selected: ""
      });

      wrapper.instance().clear();

      expect(wrapper.state("selected")).toBe("");
    });

    it("should clear selected stated", () => {
      wrapper.instance().setState({
        selected: "1+1"
      });

      wrapper.instance().clear();

      expect(wrapper.state("selected")).toBe("");
    });
  });

  describe("deleteLast", () => {
    it("should do nothing if no selected state", () => {
      wrapper.instance().setState({
        selected: ""
      });

      wrapper.instance().clear();

      expect(wrapper.state("selected")).toBe("");
    });

    it("should delete last character in state", () => {
      wrapper.setState({
        selected: "1+1"
      });

      wrapper.instance().deleteLast();

      expect(wrapper.state("selected")).toBe("1+");
    });
  });

  describe("update", () => {
    it("should do nothing if no selected state", () => {
      wrapper.instance().setState({
        selected: ""
      });

      wrapper.instance().clear();

      expect(wrapper.state("selected")).toBe("");
    });

    it("should add value to state", () => {
      wrapper.setState({
        selected: "1+"
      });

      wrapper.instance().update({ target: { value: "1" } });

      expect(wrapper.state("selected")).toBe("1+1");
    });
  });

  describe("calculate", () => {
    it("should do nothing if no selected state", () => {
      wrapper.instance().setState({
        selected: ""
      });

      wrapper.instance().clear();

      expect(wrapper.state("selected")).toBe("");
    });

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
