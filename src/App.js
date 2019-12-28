import React from 'react';
import Home from './Router/Home';
import FormHook from './API/FormHook';

function App() {
  return (
    <div className="App container mt-5">
      <Home/>
      <hr/>
      <FormHook />
      <hr/>
    </div>
  );
}

export default App;
