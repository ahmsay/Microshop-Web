import React, { Component } from 'react'
import { PaymentRemoteService } from '../../RemoteService'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

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
        <TableRow key={ payment.id }>
          <TableCell onClick={ () => this.getRecord(payment.id) } component="th" scope="row">
            { payment.id }
          </TableCell>
          <TableCell align="right">{ payment.totalCharge }</TableCell>
          <TableCell align="right">{ payment.customerId }</TableCell>
        </TableRow>
      )
    })
    let table = (
      <TableContainer component={ Paper }>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Total Charge</TableCell>
              <TableCell align="right">Customer Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { tableData }
          </TableBody>
        </Table>
      </TableContainer>
    )
    return (
      <div>
        <h3>Payments</h3>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default PaymentList
