import React from 'react'
import {UseClickAButton} from "./hooks/index";

export const ClickAButton = () => {
    const { handleClick, total } = UseClickAButton();
    return <button onClick={handleClick}>{total}</button>;
}