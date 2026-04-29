import { useState } from 'react';

function Counter() {
    const [array, setArray] = useState([]);


    return (
        <div>
            <h1>{array.toString()}</h1>
            <button onClick={() => { setArray((prevArray) => [...prevArray, "+1"])}}>Increase</button>
            <button onClick={() => { setArray((prevArray) => [...prevArray, "-1"])}}>Decrease</button>
        </div>
    );
}

export default Counter;