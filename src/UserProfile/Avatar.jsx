import React from 'react';
import Foto from './img/avatar.png';
import './style/style.css';

function Avatar(){
    return(
        <div>
            <img src={Foto} alt="Foto Profile"/>
        </div>
    )
}

export default Avatar;