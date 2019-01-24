import React, { Component } from 'react'
import './body.css';

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="centerLoader">
            <h1>loading............</h1>
        </div>
        <div className="bodyContent">

        </div>
      </div>
    )
  }
}
