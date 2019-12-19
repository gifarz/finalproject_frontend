import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import Clock from './Clock';

function App() {
  const msg = "Hello World"
  return (
    <div className="App container mt-5">
      <div>
        <div>
          <Clock/>
          <h4 class="bg-primary text-white text-center p-2"></h4>
        </div>
        <Button> wow </Button>
      </div>
    </div>
  );
}

export default App;
