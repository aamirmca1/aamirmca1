// import exp from "constants";
// import { useState } from "react";

function MyFruitsList() {
    const fruits = ['Apple', 'Grapes', 'Watermelon']

    return(
        <ul>
            {
                fruits.map(( fruit, index) =>{
                    return (<li key={fruit}>{fruit}</li>)
                })
            }
        </ul>
    );
}

export default MyFruitsList