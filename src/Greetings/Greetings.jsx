import React from 'react';

export default function Greetings(props){
    return(
        <div>
            <h3 style={{textAlign: "center"}}>Hallo my name is {props.name}, I am {props.age} years old, and I am a {props.gender}</h3>
        </div>
    )
}