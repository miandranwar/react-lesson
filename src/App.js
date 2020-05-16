import React from "react";
import "./App.css";
import Header from "./Components/header";

function App() {
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">Nav</div>
      <div className="mainbody">Main</div>
      <div className="face">face</div> 
      <div className="tweet">tweet</div> 
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
