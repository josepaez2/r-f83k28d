// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   state = {
//     // valor: 1,
//     // nombre: "",
//     // lastName: "",
//     value: 0
//   }
//   handler = () => {
//     // const {name, value} = target
//     // this.state.name = event.target.value
//     // this.setState({[value]: value + 1})
//     this.setState({ value: this.state.value + 1 })
//   }
//   // saveUser = (event) => {

//   // }
//   render() {
//     // console.log("Cambié")
//     return (
//       <div>
//         <h1>Contador</h1>
//         <p name="value" value={this.state.value}>{this.state.value}</p>
//         <button name="nada" type="text" onClick={this.handler}>Incrementa</button>
//         {/* <input name="nombre" type="text" onChange={this.handler}></input> */}
//         {/* <p name="name">{this.state.value}</p> */}
//         {/* <p name="name">{console.log(this.state)}</p> */}
//         {/* <input name="lastName" type="text" onChange={this.handler.lastName}></input> */}
//       </div>

//     )
//   }

// }

// export default App;


import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: 0
  }
  handler = () => {
    this.setState({ value: this.state.value + 1 })
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc" onClick={this.handler}>Incrementa</button>
      </div>
    );
  }
}

export default App;
