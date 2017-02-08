import React, { Component } from 'react';
import './bulma.css';
import {TodoSelect} from './TodoSelect.js';
export class TodoBox extends Component {
  state={
    ValueState:''
  }
  HandleValue=(event)=>{
    this.setState({ValueState:event.target.value});
  }
    render() {
      var boxArray=[];
      for (var i = 1; i <= this.state.ValueState; i++) {
        boxArray.push(<div className="column notification is-primary has-text-centered"><div className="notification">
          <TodoSelect/></div></div>);
      }
      return(
          <div>
          <span className="card-content">
            <center>
            <span className="select" onChange={this.HandleValue} value={this.state.ValueState}>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </span>
            </center>
          </span>
            <span className="card-content">
            <div className="columns is-large">
              {boxArray}
            </div>
            </span>
          </div>
      );
    }
}
