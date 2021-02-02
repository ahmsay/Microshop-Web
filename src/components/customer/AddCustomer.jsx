import React, { Component } from 'react'

class AddCustomer extends Component {
  state = {
      name: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h4>Add New Customer</h4>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={ this.handleChange }/>
        <button>Add</button>
      </form>
    )
  }
}

export default AddCustomer
