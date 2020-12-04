import React, { Component } from 'react'
import axios from 'axios'

class CustomerList extends Component {
  getRecord = (id) => {
    axios.get('http://localhost:8081/customers/' + id).then(response => {
      console.log(response.data)
    })
  }
  render() {
    let { customerList } = this.props
    let tableData = customerList.map(customer => {
      return (
        <tr key={ customer.id }>
          <td>{ customer.id }</td>
          <td>{ customer.name }</td>
        </tr>
      )
    })
    let table = (
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
            { tableData }
          </tbody>
        </table>
      </div>
    )
    return (
      <div>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default CustomerList
