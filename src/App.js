import React, { useState, useReducer } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  //let [number, setNumber] = useState(45);
  let value = useState(48);
  return ( 
    <ValueContext.Provider value={value}>
      <div className = "App-header" >
         
        <h3>Hello World of React’s Context API and useReducer</h3> 
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
    
  );
}

export default App;
