import React, { Component } from 'react'
import { AccountRemoteService } from '../../RemoteService'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
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
      </div>
    )
  }
}

export default (withStyles(useStyles)(CustomerList))
