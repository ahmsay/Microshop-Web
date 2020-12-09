import React, { Component } from 'react'
import { OrderRemoteService } from '../../RemoteService'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  table: theme.table,
  title: theme.title,
  tableCell: theme.tableCell
})

class OrderList extends Component {
  state = {
    orders: []
  }
  componentDidMount() {
    OrderRemoteService.getOrders().then(orders => {
      this.setState({ orders })
    })
  }
  getRecord = (id) => {
    OrderRemoteService.getOrderById(id).then(order => {
      console.log(order)
    })
  }
  render() {
    const { classes } = this.props
    let tableData = this.state.orders.map(order => {
      return (
        <TableRow key={ order.id }>
          <TableCell className={ classes.tableCell } onClick={ () => this.getRecord(order.id) } component="th" scope="row">
            { order.id }
          </TableCell>
          <TableCell className={ classes.tableCell } align="right">{ order.status }</TableCell>
          <TableCell className={ classes.tableCell } align="right">{ order.customerId }</TableCell>
          <TableCell className={ classes.tableCell } align="right">{ order.paymentId }</TableCell>
        </TableRow>
      )
    })
    let table = (
      <TableContainer className={ classes.table } component={ Paper }>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={ classes.tableCell }>Id</TableCell>
              <TableCell className={ classes.tableCell } align="right">Status</TableCell>
              <TableCell className={ classes.tableCell } align="right">Customer Id</TableCell>
              <TableCell className={ classes.tableCell } align="right">Payment Id</TableCell>
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
        <h3 className={ classes.title }>Orders</h3>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default (withStyles(useStyles)(OrderList))
