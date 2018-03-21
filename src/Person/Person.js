import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.clicked}>I'm {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.inputChanged} value={props.name} />
            <button onClick={props.personDeleted}>Delete me</button>
        </div>
    )
}

export default person;