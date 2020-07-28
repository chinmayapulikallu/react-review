import React from 'react';
import './App.css';
import Ninja from './Ninja.js';
import AddNinja from './AddNinja.js';

class App extends React.Component {
  state = {
    ninja: [
      {name: "resh", age: 25, belt: "black", id: 1},
      {name: "sai", age: 25, belt: "green", id: 2 },
      {name: "sushil", age: 5, belt: "orange", id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    this.setState({
      ninja:  [...this.state.ninja, ninja]
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninja.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninja:  ninjas
    })
  }

  componentDidMount() {
    console.log('component mounted!!!!')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated')
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className="app-content">
        <h1>My React App</h1>
        <p>Welcome!!!!</p>
        <Ninja ninja={this.state.ninja} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App;
