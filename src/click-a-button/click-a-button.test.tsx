import * as hooks from './hooks';
import {act} from "react-dom/test-utils";
import {render} from "@testing-library/react";
import {ClickAButton} from "./click-a-button";

test('it runs with a preset value',() =>  {
    const CLICK_HANDLER = jest.fn();
    const STATE_SPY = jest.spyOn(hooks, 'default');

    STATE_SPY.mockReturnValue({
        handleClick: CLICK_HANDLER,
        total: 5,
    });

    const component  = render(<ClickAButton />);
    expect(component.container).toHaveTextContent('0');
    act(() => {
        component.container.click();
    });
    expect(CLICK_HANDLER).toHaveBeenCalled();
})
