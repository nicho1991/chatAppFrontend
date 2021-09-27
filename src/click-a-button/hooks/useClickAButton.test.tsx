import * as React from "react";
import { UseClickAButton } from "./index";
import { render, act } from "@testing-library/react";
import { IUseClickAButton } from "./useClickAButton";

function setup() {
  const returnVal = {} as IUseClickAButton;
  function TestComponent() {
    Object.assign(returnVal, UseClickAButton());
    return null;
  }
  render(<TestComponent />);
  return returnVal;
}

describe("component", () => {
  let clickAButton: IUseClickAButton;
  beforeEach(() => {
    clickAButton = setup();
  });

  test("initial of zero", () => {
    expect(clickAButton.total).toBe(0);
  });

  test("1 press increments to 1", () => {
    act(() => {
      clickAButton.handleClick();
    });

    expect(clickAButton.total).toBe(1);
  });
});
