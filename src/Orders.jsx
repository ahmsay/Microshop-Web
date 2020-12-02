import React, { Component } from 'react'

class Orders extends Component {
  render() {
    let { data } = this.props
    let orderTable = data.map(order => {
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
