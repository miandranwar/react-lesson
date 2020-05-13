import React, { Component } from "react";


class App2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : ''
        }
    }
    
    handleusenamechange = event => {
        this.setState({
            username : event.target.value
        })
    }
    handlersubmit = event => {
        alert(`${this.state.username}`)
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handlersubmit}>
            <label>User Name : </label>
            <input type="text" value={this.state.username} onChange={this.handleusenamechange}></input>
            <button >Submit</button>
        </form>
      </div>
    );
  }
}

export default App2;
