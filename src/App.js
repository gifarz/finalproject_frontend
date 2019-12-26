import React from 'react';
import Home from './Router/Home';
// import Form from '././ReactHook/Form';
import TryAxios from './API/TryAxios';
import ApiGetBooks from './API/ApiGetBooks';
// import HookApiGetBooks from './API/HookApiGetBooks';
import {ApiPostBooks} from './API/ApiPostBooks';
import {HookApiPostBooks} from './API/HookApiPostBooks';

function App() {
  return (
    <div className="App container mt-5">
      <Home/>
      <TryAxios />
      <hr/>
      <ApiGetBooks />
      <hr />
      {/* <HookApiGetBooks />
      <hr/> */}
      <ApiPostBooks />
      <hr/>
      <HookApiPostBooks />
    </div>
  );
}

export default App;
