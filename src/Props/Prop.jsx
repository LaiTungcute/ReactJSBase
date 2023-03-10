function Prop(props) {
    const {color, handleChange, myName} = props;
    return (
        <>
            <h2 style={{color: `${color}`}}>Hello everyone. My name is {myName}cute :3</h2>
            <button onClick={handleChange}>ChangeColor</button>
        </>
    )
}

export default Prop;