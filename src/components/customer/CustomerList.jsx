import React, { Component } from 'react'
import { AccountRemoteService } from '../../Remote'
import { List, ListItem, ListItemText, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CustomerDetail from '../customer/CustomerDetail'
import AddCustomer from '../customer/AddCustomer'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
})

class CustomerList extends Component {
  state = {
    customers: [],
    customer: { paymentList: [], orderList: [] },
    dialogOpen: false
  }
  componentDidMount() {
    AccountRemoteService.getCustomers().then(customers => {
      this.setState({ customers })
    })
  }
  toggleDialog = (val) => {
    this.setState({ dialogOpen: val })
  }
  getRecord = (id) => {
    AccountRemoteService.getCustomerById(id).then(customer => {
      this.setState({ customer })
      this.toggleDialog(true)
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
        <Grid container direction={"row"} spacing={2}>
          <Grid item>
            { listData.length === 0 ? null : list }
          </Grid>
          <Grid item>
            <AddCustomer/>
          </Grid>
        </Grid>
        <CustomerDetail open={ this.state.dialogOpen } customer={ this.state.customer } toggle={ () => this.toggleDialog(false) }/>
      </div>
    )
  }
}

export default (withStyles(useStyles)(CustomerList))
