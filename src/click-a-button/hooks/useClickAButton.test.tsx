import { renderHook, act } from "@testing-library/react-hooks";
import { UseClickAButton } from "./index";

describe("component", () => {
  test("initial of zero", () => {
    const { result } = renderHook(() => UseClickAButton());
    expect(result.current.total).toBe(0);
  });

  test("1 press increments to 1", () => {
    const { result } = renderHook(() => UseClickAButton());
    act(() => {
      result.current.handleClick();
    });

    expect(result.current.total).toBe(1);
  });
});
