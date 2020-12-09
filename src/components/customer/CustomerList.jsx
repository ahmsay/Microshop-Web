import React, { Component } from 'react'
import { AccountRemoteService } from '../../RemoteService'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  table: theme.table,
  title: theme.title,
  tableCell: theme.tableCell
})

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
    const { classes } = this.props
    let tableData = this.state.customers.map(customer => {
      return (
        <TableRow key={ customer.id } onClick={ () => this.getRecord(customer.id) }>
          <TableCell className={ classes.tableCell } component="th" scope="row">{ customer.id }</TableCell>
          <TableCell className={ classes.tableCell } align="right">{ customer.name }</TableCell>
        </TableRow>
      )
    })
    let table = (
      <TableContainer className={ classes.table } component={ Paper }>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={ classes.tableCell }>Id</TableCell>
              <TableCell className={ classes.tableCell } align="right">Name</TableCell>
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
        <h3 className={ classes.title }>Customers</h3>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default (withStyles(useStyles)(CustomerList))
