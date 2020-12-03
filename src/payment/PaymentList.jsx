import React, { Component } from 'react'

class Payments extends Component {
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

export default Payments
