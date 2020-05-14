import React from 'react';
import './App.css';
import FormChild from './Components/formChild';

function App() {
  // inline styling
  let style = {
      color: 'purple',
      textAlign: 'center'
  }
  return (
    <div style={style}>
      <h1>React Form</h1>
      <FormChild/>
    </div>
  );
}

export default App;
