import { useEffect, useState } from "react"

function EffectH() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json));
    }, []);
    return (
        <>
            {
                data && (
                    data.map((item, id) => (
                        <div key={id}>{item.title}</div>
                    ))
                )
            }
        </>
    )
}

export default EffectH;