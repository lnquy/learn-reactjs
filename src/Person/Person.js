import React from 'react';
import Person from './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.clicked}>I'm {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.inputChanged} value={props.name} />
        </div>
    )
}

export default person;