import { useCallback, useState } from "react";

function useCallbackExample(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementCount1 = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1]);

    const incrementCount2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);
    
    alert("Component Rendered");
    return (<>
        <div>
            <h2>Count 1: {count1}</h2>
            <button onClick={incrementCount1}>Increment Count 1</button>
        </div>
        <div>
            <h2>Count 2: {count2}</h2>
            <button onClick={incrementCount2}>Increment Count 2</button>
        </div>
    </>);

}

export default useCallbackExample;