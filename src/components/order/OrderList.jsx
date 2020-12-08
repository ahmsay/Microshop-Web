import React, { Component } from 'react'
import { OrderRemoteService } from '../../RemoteService'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

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
    let tableData = this.state.orders.map(order => {
      return (
        <TableRow key={ order.id }>
          <TableCell onClick={ () => this.getRecord(order.id) } component="th" scope="row">
            { order.id }
          </TableCell>
          <TableCell align="right">{ order.status }</TableCell>
          <TableCell align="right">{ order.customerId }</TableCell>
          <TableCell align="right">{ order.paymentId }</TableCell>
        </TableRow>
      )
    })
    let table = (
      <TableContainer component={ Paper }>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Customer Id</TableCell>
              <TableCell align="right">Payment Id</TableCell>
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
        <h3>Orders</h3>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default OrderList
