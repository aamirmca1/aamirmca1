import { useState } from "react";
import './MyStyleSheet.css';
import styles from './Button.module.css';

function MyForm() {
    const [input, setInput] = useState({
        name: '',
        lastName: ''
    });

    // const handleClick = (e: any) => {
    //     e.preventDefault();
    //     setCar(e.target.value)
    // }

    const submit = (e: Event) => {
        e.preventDefault();
        //alert(`your name is ${car}`)
    }

    return (
        <form onSubmit={(e) => submit(e as unknown as Event)}>
            <label style={{color:"brown"}}>Enter your name: </label>
            <input type="text" name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
            <>{input.name}</>
            <br />
            <label>Enter your last name: </label>
            <input type="text" name="lastName" value={input.lastName} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
            <input type="button" value="Submit" className={styles.mybutton} />

            <br />
            <div>
      <button className={`${styles.mybutton} ${styles.primary}`}>
        My Primary Button
      </button>
      <button className={`${styles.mybutton} ${styles.secondary}`}>
        My Secondary Button
      </button>
    </div>
        </form>

    )
}

export default MyForm;