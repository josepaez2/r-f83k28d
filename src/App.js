import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  state = {
    valor: 1,
    nombre: "",
    lastName: ""
  }
  handler = ({target}) => {
    const {name, value} = target
    // this.state.name = event.target.value
    this.setState({[name]: value})
  }
  // saveUser = (event) => {

  // }
  render() {
    console.log("Cambié")
    return (
      <div>
        <h1>Repetidor</h1>
        <input name="nombre" type="text" onChange={this.handler}></input>
        <p>{this.state.nombre}</p>
        {/* <input name="lastName" type="text" onChange={this.handler.lastName}></input> */}
      </div>

    )
  }

}

export default App;
