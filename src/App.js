import React from 'react';
import './App.css';
import App2 from './Components/form';

function App() {
  // inline styling
  let style = {
      color: 'purple',
      textAlign: 'center'
  }
  return (
    <div style={style}>
      <h1>React Form</h1>
      <App2/>
    </div>
  );
}

export default App;
