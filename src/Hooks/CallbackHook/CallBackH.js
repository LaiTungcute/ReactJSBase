import { useCallback, useState } from "react";

function CallbackH() {
    const [count, setCount] = useState(0);
    const myF = useCallback(() => {
        setCount(count+1);
        console.log('hello');
    }, [count]);
    return (
        <>
            <h2>{count}</h2>
            <button onClick={myF}>Tăng</button>
            <button onClick={() => setCount(count+1)}>Tăng 2</button>
        </>
    )
}

export default CallbackH;