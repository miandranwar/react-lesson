import React, { Component } from "react";

class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "", //for default value insert text here
      email: "",
      password: ""
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
      [event.target.name]: event.target.value
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
          <label>User Name : 
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.hendleall}
            ></input></label> <br></br>
          <br></br>
          <label> Email : 
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.hendleall}
            ></input></label><br></br>
          <br></br>
          <label> Password : 
           <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.hendleall}
            ></input></label><br></br>
          <br></br>
          <button>Submit</button>
        </form>
        <h1>
          Name : {this.state.username} <br />
          Email: {this.state.email}
        </h1> 
        {/* <FormChild
          username={this.state.username}
          email={this.state.email}
          handlersubmit={this.state.handlersubmit}
          handleall={this.state.handleall}
        /> */}
      </div>
    );
  }
}

export default App2;
