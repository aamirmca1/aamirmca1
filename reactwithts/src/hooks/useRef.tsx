import { useState, useEffect, useRef} from "react";

function ComponentRef(){
    const [inputValue, setInputValue] = useState("");
    const inputElement = useRef<HTMLInputElement>(null);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // }, [inputValue]);

    const focusInput = () => {
        // (inputElement.current as HTMLInputElement).focus();
        inputElement.current!.focus()
        console.log(inputElement);
    }

    return(<>
        <input type="text" value={inputValue} ref={inputElement} onChange={(e) => setInputValue(e.target.value)} />
       <button onClick={focusInput}>Focus Input</button>
    </>);
}

export default ComponentRef;