import React from 'react';

export default function UserName(props){
    return(
        <div>
            <h2 style={{textAlign: "center", marginTop: "20px"}}><strong>Hallo nama saya {props.name}</strong></h2>
        </div>
    )
}