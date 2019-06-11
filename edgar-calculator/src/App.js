import React from 'react';
import ResultArea from './ResultArea.js';
import Keypad from './Keypad.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {result: "Hello"};

    setTimeout(() => {
      this.setState((state) => ( {result: state.result + " world" }));
    }, 30000);
  }
  render(){
      return (
      <div className="App">
        <div><ResultArea textResult={this.state.result}/></div>
        <div><Keypad/></div>
      </div>
    );
  }
}

export default App;
