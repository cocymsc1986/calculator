import React from "react";
import { shallow } from "enzyme";

import CalculatorView from "./CalculatorView";

describe("CalculatorView", () => {
  it("should render", () => {
    const wrapper = shallow(<CalculatorView />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should call onRegularClick when clicking a standard button", () => {
    const onRegularClickMock = jest.fn();

    const wrapper = shallow(
      <CalculatorView onRegularClick={onRegularClickMock} />
    );

    wrapper.find("[data-test-id='number-1']").simulate("click");

    expect(onRegularClickMock).toHaveBeenCalled();
  });

  it("should call onClearClick when clicking clear button", () => {
    const onClearClickMock = jest.fn();

    const wrapper = shallow(<CalculatorView onClearClick={onClearClickMock} />);

    wrapper.find("[data-test-id='clear']").simulate("click");

    expect(onClearClickMock).toHaveBeenCalled();
  });

  it("should call onCEClick when clicking CE button", () => {
    const onCEClickMock = jest.fn();

    const wrapper = shallow(<CalculatorView onCEClick={onCEClickMock} />);

    wrapper.find("[data-test-id='ce']").simulate("click");

    expect(onCEClickMock).toHaveBeenCalled();
  });

  it("should call onSumClick when clicking equals button", () => {
    const onSumClickMock = jest.fn();

    const wrapper = shallow(<CalculatorView onSumClick={onSumClickMock} />);

    wrapper.find("[data-test-id='equals']").simulate("click");

    expect(onSumClickMock).toHaveBeenCalled();
  });
});
