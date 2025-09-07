import { useState } from "react";

function MyfavoriteColor() {
    const [color, setColor] = useState("blue");
    return (
        <>
            <h1 style={{color: color}}>My favorite color is {color}</h1>
            <br/>
            <button type="button" onClick={() => setColor("red")}>Red</button>
            <br/>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <br/>
            <button type="button" onClick={() => setColor("green")}>Green</button>
            <br/>
            <button type="button" onClick={() => setColor("yellow")}>Yellow</button>
        </>
    );
}

function Car() {
    const [car, setCar] = useState({ brand : "Ford", model: "Mustang", year: "1964" });
    const updateCar = () => {
        setCar( pre => {
            return { ...pre, year: "2020" } 
        });
    }
    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.model} from {car.year}.
            </p>
            <button type="button" onClick={() => updateCar()}>Change Car</button>
        </>
    );
}



export { Car, MyfavoriteColor }