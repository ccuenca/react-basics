import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm a {props.name} and i am {props.age} years old!</p>
            <p><b>{props.children}</b></p>
            <input type="text" onChange={props.changeName} value={props.name}/> 
        </div>

    )
}

export default person;