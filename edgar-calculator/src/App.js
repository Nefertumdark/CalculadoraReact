import React from 'react';
import ResultArea from './ResultArea.js';
import Keypad from './Keypad.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {result: "Hello", deleteNextKey: true};
  }

  updateOperation = (value) => {
    console.log("updating...");
    this.setState((state) => {
      if(state.deleteNextKey === true)
      {
        state.result = "";
      }
      return {result: state.result + value, deleteNextKey: false }
    });
  }

  executeOperation  = () => {
    console.log("executing...");
    this.setState((state) => {
      var valuetoShow = "";
      try {
        valuetoShow = eval(state.result);
      }
      catch {
        valuetoShow = "ERR";
      }   
      return {result: valuetoShow, deleteNextKey: true }
    });
  }

  clear  = () => {
    console.log("clearing...");
    this.setState((state) => ( {result: "" }));
  }

  render(){
      return (
      <div className="App">
        <div><ResultArea textResult={this.state.result}/></div>
        <div><Keypad updateOperation={this.updateOperation} executeOperation={this.executeOperation} clear={this.clear}/></div>
      </div>
    );
  }
}

export default App;
