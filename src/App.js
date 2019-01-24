import React, { Component } from 'react';
import './App.css';
import ToolBar from './Components/Navbar';
import Body from './Components/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToolBar/>
        <Body/>
      </div>
    );
  }
}

export default App;
