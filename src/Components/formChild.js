import React, { Component } from "react";

class FormChild extends Component {
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
export default FormChild;
