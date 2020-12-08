import React, { Component } from 'react'
import { AccountRemoteService } from '../../RemoteService'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

class CustomerList extends Component {
  state = {
    customers: []
  }
  componentDidMount() {
    AccountRemoteService.getCustomers().then(customers => {
      this.setState({ customers })
    })
  }
  getRecord = (id) => {
    AccountRemoteService.getCustomerById(id).then(customer => {
      console.log(customer)
    })
  }
  render() {
    let tableData = this.state.customers.map(customer => {
      return (
        <TableRow key={customer.id}>
          <TableCell component="th" scope="row">
            {customer.id}
          </TableCell>
          <TableCell align="right">{customer.name}</TableCell>
        </TableRow>
      )
    })
    let table = (
      <TableContainer component={ Paper }>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
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
        <h3>Customers</h3>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default CustomerList
