import React, { Component } from 'react';
import Button from './Button.js';

class App extends Component {

  state = {
    numberOne: 0,
    numberTwo: 3
  };

  render() {
    return (
      <div>
        <p className="p1">SUP DUUUUUDE</p>
        <Button number={this.state.numberOne}/>
        <p className="p1">TESTINGGGGGGG</p>
        <Button number={this.state.numberTwo}/>
      </div>
    );
  }
}

export default App;
