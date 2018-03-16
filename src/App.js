import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "lnquy", age: 25},
      {name: "agent007", age: 40, children: "Give me a <b>name</b>"},
    ],
    otherVars: 'anything',
    isShowPeople: false
  }
  
  switchNameHandler = (name) => {
    console.log('btn clicked!')
    this.setState({
      persons: [
        {name: name, age: 45},
        {name: "agent K", age: 33, children: "I have no name"}
      ]
    })
  }

  updateNameHandler = (event) => {
    this.setState({
      persons: [
        {name: "lnquy", age: 45},
        {name: event.target.value, age: 33, children: "I have no name"}
      ]
    })
  }

  togglePeopleHandler = () => {
    console.log(this.state.isShowPeople)
    this.setState({isShowPeople: !this.state.isShowPeople})
  }

  render() {
    let people = null
    if (this.state.isShowPeople) {
      people = (
        <div>
          <button onClick={this.switchNameHandler.bind(this, 'Quy Le')}>Switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            clicked={this.switchNameHandler.bind(this, 'lnquy')}
            inputChanged={this.updateNameHandler}>
              {this.state.persons[0].children}
          </Person>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button onClick={this.togglePeopleHandler}>Toggle people</button>
        <hr/>
        {people}
      </div>
    );
  }
}

export default App;
