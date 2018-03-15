import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "lnquy", age: 25},
      {name: "agent007", age: 40, children: "Give me a <b>name</b>"},
    ],
    otherVars: 'anything'
  }
  
  switchNameHandler = () => {
    console.log('btn clicked!')
    this.setState({
      persons: [
        {name: "new one", age: 45},
        {name: "agent K", age: 33, children: "I has no name"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>{this.state.persons[0].children}</Person>
      </div>
    );
  }
}

export default App;
