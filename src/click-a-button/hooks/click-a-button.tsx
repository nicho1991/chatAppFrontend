import React, {useCallback, useState} from 'react';

export const useClickAButton = () => {
    const [total, setTotal] = useState<number>(0);
    const handleClick = useCallback(() => {
        setTotal(total => total + 1);
    }, []);
    return {
        handleClick,
        total,
    };
}