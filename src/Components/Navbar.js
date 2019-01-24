import React, { Component } from 'react'
import './Navbar.css';


export default class ToolBar extends Component {
  
  render() {
    return (
      <div className="tool-bar">
        <div className="rows">
          <div className="right">
            <h2>HackerNews</h2>
          </div>
        <div className="left">
                <h3 className="items"> New</h3>
                <h3 className="items"> Comments </h3>
                <h3 className="items" > Ask </h3>
                <h3 className="items">show</h3>
                <h3 className="items">jobs</h3>
                <h3 className="items">submit</h3>
        </div>
        </div>
      </div>
      
    )
  }
}
