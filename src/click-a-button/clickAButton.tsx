import React from 'react'
import { UseClickAButton } from './hooks/index'

export const ClickAButton = (): JSX.Element => {
    const { handleClick, total } = UseClickAButton()
    return <button onClick={handleClick}>{total}</button>
}
