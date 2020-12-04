import React, { Component } from 'react'
import axios from 'axios'

class OrderList extends Component {
  getRecord = (id) => {
    axios.get('http://localhost:8083/orders/' + id).then(response => {
      console.log(response.data)
    })
  }
  render() {
    let { orderList } = this.props
    let tableData = orderList.map(order => {
      return (
        <tr key={ order.id }>
          <td>{ order.id }</td>
          <td>{ order.status }</td>
          <td>{ order.customerId }</td>
          <td>{ order.paymentId }</td>
        </tr>
      )
    })
    let table = (
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

export default OrderList
