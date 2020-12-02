import React, { Component } from 'react'
import axios from 'axios'

class Customers extends Component {
  getRecords = (collection) => {
    axios.get(collection.url).then(response => {
      let col = this.state[collection.name]
      col.data = response.data
      this.setState({ col })
    })
  }
  render() {
    let { data } = this.props
    let customerTable = data.map(customer => {
      return (
        <tr key={ customer.id }>
          <td>{ customer.id }</td>
          <td>{ customer.name }</td>
        </tr>
      )
    })
    return (
      <div>
        <h3>Customers</h3>
        <table id="customerTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { customerTable }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Customers
