import React, { Component } from 'react'
import { OrderRemoteService } from '../../RemoteService'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
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
    let listData = this.state.orders.map(order => {
      return (
        <ListItem key={ order.id } onClick={ () => this.getRecord(order.id) } button>
          <ListItemText primary={ order.id } secondary={ order.status }/>
        </ListItem>
      )
    })
    let list = (
      <List className={ classes.list }>
        { listData }
      </List>
    )
    return (
      <div>
        <h3 className={ classes.title }>Orders</h3>
        { listData.length === 0 ? null : list }
      </div>
    )
  }
}

export default (withStyles(useStyles)(OrderList))
