import React, { Component } from 'react';

import classes from './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component{
  state = {
    userName: "Ironman"
  }

  usernameChange = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChange} currentName={this.state.userName}/>
        <UserOutput userName="Shubham"/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput/>
      </div>
    );
  }
}
export default App;