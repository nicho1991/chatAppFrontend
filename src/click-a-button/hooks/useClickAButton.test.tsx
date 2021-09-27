import * as React from "react";
import {UseClickAButton} from "./index";
import {render, act} from '@testing-library/react'
import {IUseClickAButton} from "./useClickAButton";


function setup() {
    const returnVal = {} as IUseClickAButton
    function TestComponent() {
        Object.assign(returnVal, UseClickAButton())
        return null
    }
    render(<TestComponent />)
    return returnVal
}

test('test component', () =>{
    const clickAButton = setup()

    expect(clickAButton.total).toBe(0)

    act(() => {
        clickAButton.handleClick()
    })

    expect(clickAButton.total).toBe(1)
})