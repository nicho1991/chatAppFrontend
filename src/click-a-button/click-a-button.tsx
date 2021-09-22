import {useClickAButton} from "./hooks/click-a-button";

export const ClickAButton = () => {
    const { handleClick, total } = useClickAButton();
    return <button onClick={handleClick}>{total}</button>;
}