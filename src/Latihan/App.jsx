import React from 'react';
import One from './NumberOne';
import Two from './NumberTwo';
import Three from './NumberThree';

function App(){
    return(
        <div className="container">
            <One/>
            <Two name="Muhammad Gifar Zaini"/>
            <Three/>
        </div>
    )
}

export default App;