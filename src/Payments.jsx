import React, { Component } from 'react'

class Payments extends Component {
  render() {
    let { paymentList } = this.props
    let paymentTable = paymentList.map(payment => {
      return (
        <tr key={ payment.id }>
          <td>{ payment.id }</td>
          <td>{ payment.totalCharge }</td>
          <td>{ payment.customerId }</td>
        </tr>
      )
    })
    return (
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
            { paymentTable }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Payments
