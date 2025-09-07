import { useState, createContext , useContext} from "react";
import Component3 from "./Component3";

const UserContext = createContext("Guest");

function Component() {
    const [user, setUser] = useState("John");
    return (
        <UserContext.Provider value={user}>
            <h1>Hello user {user}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2(){
    return (<>
        <h2>Hello Component2</h2>
        <Component3 />
    </>);
}


export { Component, UserContext };