import React from 'react';
import { render } from 'react-dom';
import './Frog.css';
import frogs from './frogs.js';



class Frog extends React.Component{
  constructor(props){
    super(props);
    this.state = { currentFrog: Math.floor(Math.random() * 7) };
  }

  render(){
    return (
      <div className="Frog">
        <h1>Твоя лягушка на сегодня: </h1>
        <img className="random-frog" src={frogs[this.state.currentFrog].img}></img>
        <p className="description">{frogs[this.state.currentFrog].description}</p>
      </div>
    );
  }
  
}

export default Frog;