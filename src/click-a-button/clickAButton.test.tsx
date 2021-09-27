import * as React from "react";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { ClickAButton } from "./index";
import { UseClickAButton } from "./hooks";
const hooks = { UseClickAButton };
jest.mock("./hooks");

// see https://charles-stover.medium.com/writing-testable-react-components-with-hooks-23441ee582d5
describe("ClickAButton", () => {
  test("should render with mocked value", () => {
    const STATE_SPY = jest.spyOn(hooks, "UseClickAButton");
    const CLICK_HANDLER = jest.fn();
    STATE_SPY.mockReturnValue({
      handleClick: CLICK_HANDLER,
      total: 5,
    });
    const component = render(<ClickAButton />);
    expect(component.container).toHaveTextContent("5");
    act(() => {
      component.getByText("5").click();
    });
    expect(CLICK_HANDLER).toHaveBeenCalled();
  });
});
