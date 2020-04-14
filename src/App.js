import React, { Component } from 'react';
import classes from './App.css';
import Validation from './Validationcomponents/validation'
import Char from './char/char'
class App extends Component{
  state = {
    userInput: ''
  }
  inputchange = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteChar = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }
  render() {
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteChar(index)}/>;

    }); 

    return (
      <div className="App">
        <hr />
        <input type="text"  onChange={this.inputchange}  value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}
export default App;