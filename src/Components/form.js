import React, { Component } from "react";

class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "", //for default value insert text here
      email: "",
    };
  }

  // handleusenamechange = event => {
  //   this.setState({
  //     username: event.target.value,
  //   })

  // }
  // handleemailchange = event => {
  //   this.setState({
  //     email: event.target.value,
  //   })
  // }

  // write one handle function for every field
  hendleall = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handlersubmit = (event) => {
    // console.info(JSON.stringify(this.state))
    console.log(JSON.stringify(this.state));
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handlersubmit}>
          <label>User Name : </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.hendleall}
          ></input>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.hendleall}
          ></input>
          <button>Submit</button>
        </form>
        <h1>
          Name : {this.state.username} <br />
          Email: {this.state.email}
        </h1>
      </div>
    );
  }
}

export default App2;
