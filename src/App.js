import React from 'react';
import './App.css';

function App() {
  // inline styling
  let style = {
      color: 'purple',
      textAlign: 'center'
  }
  return (
    <div style={style}>
      <h1>Welcome from React</h1>
    </div>
  );
}

export default App;
