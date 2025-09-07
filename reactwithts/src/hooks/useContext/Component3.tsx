import { useContext } from "react";
import { UserContext } from "./Component";

function Component3(){
    const user = useContext(UserContext);
    return (<>
        <h2>Hello Component3</h2>
        <label>user from context {user}</label>
    </>);
}

export default Component3;