import { useState, useEffect } from "react";

function TimerComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);
    return <h1>I've rendered {count} times!</h1>;
}

function Counter(){
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() =>{
        setCalculation(() => count * count)
    }, [count]);

    return (
        <>
        <label>Count: {count}</label>
        <button onClick={() => setCount((c) => c + 1)}>+</button>

        <label>Square: {calculation}</label>
        </>
    )
}

export {Counter , TimerComponent};