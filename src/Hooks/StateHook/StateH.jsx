import { useState } from "react";

function StateH () {
    const [count, setCount] = useState(0);
    const handleUpNumber = () => {
        setCount(counts => counts+=1);
    }
    const handleDownNumber = () => {
        setCount(counts => counts-=1);
    }
    return (
        <>
            <h2>Đây là số: {count}</h2>
            <button onClick={handleUpNumber}>Tăng</button>
            <button onClick={handleDownNumber}>Giảm</button>
        </>
    )
}

export default StateH;