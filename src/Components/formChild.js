import React, { Component } from "react";

export class FormChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handlechange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlesubmit = (event) => {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <div>
            <label>
              User Name:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handlechange}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handlechange}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlechange}
              ></input>
            </label>
          </div>
          <button>Click Here</button>
        </form>
      </div>
    );
  }
};

export default FormChild;
