import React, { Component } from 'react'
import axios from 'axios'

class PaymentList extends Component {
  getRecord = (id) => {
    axios.get('http://localhost:8084/payments/' + id).then(response => {
      console.log(response.data)
    })
  }
  render() {
    let { paymentList } = this.props
    let tableData = paymentList.map(payment => {
      return (
        <tr key={ payment.id }>
          <td>{ payment.id }</td>
          <td>{ payment.totalCharge }</td>
          <td>{ payment.customerId }</td>
        </tr>
      )
    })
    let table = (
      <div>
        <h3>Payments</h3>
        <table id="paymentTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Total Charge</th>
              <th>Customer Id</th>
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

export default PaymentList
