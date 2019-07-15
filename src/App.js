import React, { Component } from 'react';
import './App.css';
import KeyPad from './KeyPad';
import Output from './Output';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }
  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    }
    else if (buttonName === 'C') {
      this.reset();
    }
    else if (buttonName === "CE") {
      this.backspace();
    }
    // else if('+-'.includes(buttonName))
    else
      this.setState({ result: this.state.result + buttonName })
  }
  reset = () => {
    this.setState({ result: '' });
  }
  backspace = () => {
    this.setState({ result: this.state.result.slice(0, -1) });
  }
  calculate = () => {
    let checkResult = this.state.result;
    if (checkResult.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }
    else {
      checkResult = this.state.result
    }
    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Output result={this.state.result} />
        <KeyPad buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}

export default App;
