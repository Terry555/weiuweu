import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button className="b1">DON'T CLICK {this.props.number}</button>
      </div>
    );
  }
}

export default Button;
