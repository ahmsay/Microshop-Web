import React, { Component } from 'react'
import { PaymentRemoteService } from '../../RemoteService'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  table: theme.table,
  title: theme.title,
  tableCell: theme.tableCell
})

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
    const { classes } = this.props
    let tableData = this.state.payments.map(payment => {
      return (
        <TableRow key={ payment.id } onClick={ () => this.getRecord(payment.id) }>
          <TableCell className={ classes.tableCell } component="th" scope="row">{ payment.id }</TableCell>
          <TableCell className={ classes.tableCell } align="right">{ payment.totalCharge }</TableCell>
          <TableCell className={ classes.tableCell } align="right">{ payment.customerId }</TableCell>
        </TableRow>
      )
    })
    let table = (
      <TableContainer className={ classes.table } component={ Paper }>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={ classes.tableCell }>Id</TableCell>
              <TableCell className={ classes.tableCell } align="right">Total Charge</TableCell>
              <TableCell className={ classes.tableCell } align="right">Customer Id</TableCell>
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
        <h3 className={ classes.title }>Payments</h3>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default (withStyles(useStyles)(PaymentList))
