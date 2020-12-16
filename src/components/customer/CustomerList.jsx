import React, { Component } from 'react'
import { AccountRemoteService } from '../../RemoteService'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CustomerDetail from '../customer/CustomerDetail'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
})

class CustomerList extends Component {
  state = {
    customers: [],
    open: false,
    customer: { paymentList: [], orderList: [] }
  }
  handleClickOpen = () => { this.setState({ open: true }) }
  handleClose = () => { this.setState({ open: false }) }
  componentDidMount() {
    AccountRemoteService.getCustomers().then(customers => {
      this.setState({ customers })
    })
  }
  getRecord = (id) => {
    AccountRemoteService.getCustomerById(id).then(customer => {
      this.setState({ customer})
      this.handleClickOpen()
    })
  }
  render() {
    const { classes } = this.props
    const listData = this.state.customers.map(customer => {
      return (
        <ListItem key={ customer.id } onClick={ () => this.getRecord(customer.id) } button>
          <ListItemText primary={ customer.name }/>
        </ListItem>
      )
    })
    const list = (
      <List className={ classes.list }>
        { listData }
      </List>
    )
    return (
      <div>
        <h3 className={ classes.title }>Customers</h3>
        { listData.length === 0 ? null : list }
        <CustomerDetail open={ this.state.open } customer={ this.state.customer } onClose={ this.handleClose }/>
      </div>
    )
  }
}

export default (withStyles(useStyles)(CustomerList))
