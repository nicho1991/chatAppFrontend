import * as hooks from './hooks';
import {act} from "react-dom/test-utils";
import {render} from "@testing-library/react";
import {ClickAButton} from "./click-a-button";
const STATE_SPY = jest.spyOn(hooks, 'useClickAButton');
const CLICK_HANDLER = jest.fn();
STATE_SPY.mockReturnValue({
    handleClick: CLICK_HANDLER,
    total: 5,
});
const { container } = render(<ClickAButton />);
expect('5').toBeInTheDocument();
act(() => {
    container.click();
});
expect(CLICK_HANDLER).toHaveBeenCalled();