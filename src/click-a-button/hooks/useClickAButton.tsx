import React, {useCallback, useState} from 'react';

export interface IUseClickAButton {
    total: number,
    handleClick: () => void;
}

export const UseClickAButton = (): IUseClickAButton => {
    const [total, setTotal] = useState<number>(0);
    const handleClick = useCallback(() => {
        setTotal(total => total + 1);
    }, []);
    return {
        handleClick,
        total,
    };
}