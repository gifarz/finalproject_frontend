import React from 'react';
import Home from './Router/Home';
import FormHook from './API/FormHook/FormHook';
// import {UseGlobalHook} from './UseGlobalHook/UseGlobalHook';
// import SessionStorage from './UseGlobalHook/SessionStorage';
import SearchRepo from './SearchRepoGit';

function App() {
  return (
    <div className="App container mt-5">
      <SearchRepo/>
      {/* <SessionStorage/>
      <UseGlobalHook/> */}
      <Home/>
      <hr/>
      <FormHook />
      <hr/>
    </div>
  );
}

export default App;
