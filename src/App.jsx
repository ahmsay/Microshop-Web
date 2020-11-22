import React, { Component } from 'react'

class App extends Component {
  state = {
    name: 'asd'
  }
  handle = (e) => {
    console.log(this)
  }
  render() {
    return (
      <div className="App">
        <button onClick={ this.handle }>click me</button>
      </div>
    )
  }
}

export default App
