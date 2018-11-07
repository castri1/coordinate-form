import React, { Component } from 'react';
import './App.css';
import TripletSurvey from './TripletSurvey';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSurface: {
        point1: { x: 0, y: 0, z: 0, valid: null },
        point2: { x: 0, y: 0, z: 0, valid: null },
        point3: { x: 0, y: 0, z: 0, valid: null }
      },
      bottomSurface: {
        point1: { x: 0, y: 0, z: 0, valid: null },
        point2: { x: 0, y: 0, z: 0, valid: null },
        point3: { x: 0, y: 0, z: 0, valid: null }
      }
    };
    this.onData = this.onData.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  validateSurface(surface) {
    return Object.getOwnPropertyNames(surface).every(prop => surface[prop].valid);
  }

  onData(surface, data) {
    this.setState(prevState =>({
        [surface]: {
          ...prevState[surface],
          ...data,
        }
    }));
  }

  onClick() {
    const isTopValid = this.validateSurface(this.state.topSurface);
    const isBottomValid = this.validateSurface(this.state.topSurface);
    console.log(isTopValid && isBottomValid);
  }

  render() {
    return (
      <div>
      <TripletSurvey surface="topSurface" onData={this.onData}/>
      <TripletSurvey surface="bottomSurface" onData={this.onData}/>
      <button onClick={this.onClick}>Validate</button>
      </div>

    );
  }
}

export default App;
