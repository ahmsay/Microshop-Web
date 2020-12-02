import React, { Component } from 'react'

class Customers extends Component {
  render() {
    let { customerList } = this.props
    let customerTable = customerList.map(customer => {
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
