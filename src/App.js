import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 0, name: "lnquy", age: 25},
      {id: 1, name: "agent007", age: 40, childrens: "Give me a <b>name</b>"},
      {id: 2, name: "perry", age: 12, childrens: "Nothing here yet"},
    ],
    isShowPeople: false
  }
  
  switchNameHandler = (id, name) => {
    this.setState({
      persons: [
        {name: name, age: 45},
        {name: "agent K", age: 33, children: "I have no name"}
      ]
    })
  }

  updateNameHandler = (event, id) => {
    const pIdx = this.state.persons.findIndex(p => {
      return p.id === id
    })
    let person = {...this.state.persons[pIdx]}
    person.name = event.target.value
    let persons = [...this.state.persons]
    persons[pIdx] = person

    this.setState({
      persons: persons
    })
  }

  togglePeopleHandler = () => {
    this.setState({isShowPeople: !this.state.isShowPeople})
  }

  deletePersonHandler = (idx) => {
    let persons = [...this.state.persons]
    persons.splice(idx, 1)
    this.setState({persons: persons})
  }

  render() {
    let people = null
    if (this.state.isShowPeople) {
      people = (
        <div>
          <button onClick={this.switchNameHandler.bind(this, 0, 'Quy Le')}>Switch name</button>
          {
            this.state.persons.map((p, idx) => {
              return <Person 
                key={p.id}
                name={p.name} 
                age={p.age}
                clicked={this.switchNameHandler.bind(this, p.id, 'lnquy')}
                inputChanged={(event) => this.updateNameHandler(event, p.id)}
                personDeleted={this.deletePersonHandler.bind(idx)}>
                  {p.childrens}
              </Person>
            })
          }
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
