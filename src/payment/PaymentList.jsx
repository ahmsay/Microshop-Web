import React, { Component } from 'react'
import { PaymentRemoteService } from '../RemoteService'

class PaymentList extends Component {
  state = {
    payments: []
  }
  componentDidMount() {
    PaymentRemoteService.getPayments().then(payments => {
      this.setState({ payments })
    })
  }
  getRecord = (id) => {
    PaymentRemoteService.getPaymentById(id).then(payment => {
      console.log(payment)
    })
  }
  render() {
    let tableData = this.state.payments.map(payment => {
      return (
        <tr key={ payment.id }>
          <td onClick={ () => this.getRecord(payment.id) }>{ payment.id }</td>
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
