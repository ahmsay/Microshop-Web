import React, { Component } from 'react'
import axios from 'axios'
import { OrderRemoteService } from '../RemoteService'

class OrderList extends Component {
  getRecord = (id) => {
    OrderRemoteService.getOrderById(id).then(order => {
      console.log(order)
    })
  }
  render() {
    let { orderList } = this.props
    let tableData = orderList.map(order => {
      return (
        <tr key={ order.id }>
          <td onClick={ () => this.getRecord(order.id) }>{ order.id }</td>
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
