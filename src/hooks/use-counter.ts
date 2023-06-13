import { useState, useEffect } from 'react';


function useCounter(initialCount:number){
    const [count, setCount] = useState<number>(initialCount);

    const increment = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log(count);
    }, [count]);
    return {count,increment}
}

export default useCounter;