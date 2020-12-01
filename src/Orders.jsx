import React, { Component } from 'react'
import axios from 'axios'

class Orders extends Component {
  state = {
    orders: {
      name: 'orders',
      url: 'http://localhost:8083/orders',
      data: []
    }
  }
  getRecords = (collection) => {
    axios.get(collection.url).then(response => {
      let col = this.state[collection.name]
      col.data = response.data
      this.setState({ col })
    })
  }
  render() {
    let orderTable = this.state.orders.data.map(order => {
      return (
        <tr key={ order.id }>
          <td>{ order.id }</td>
          <td>{ order.status }</td>
          <td>{ order.customerId }</td>
          <td>{ order.paymentId }</td>
        </tr>
      )
    })
    return (
      <div>
        <h3>Orders</h3>
        <table id="orderTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Status</th>
              <th>Customer Id</th>
              <th>Payment Id</th>
            </tr>
          </thead>
          <tbody>
            { orderTable }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Orders
