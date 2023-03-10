import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import ChildrenP from "../Props/Children";
import Prop from "../Props/Prop";
import router from "../Router/router";

function PageLayout () {
    const [color, setColor] = useState('red');
    const myName = 'Mina';
    const handleChange = () => {
        if(color === 'blue') setColor('red');
        else setColor('blue')
    }
    return (
        <>
            <RouterProvider router={router}/>
            <Prop 
                color = {color}
                handleChange = {handleChange}
                myName = {myName}/>   
            <ChildrenP>Hello every one. My name is {myName}</ChildrenP>
        </>
    )
}

export default PageLayout;