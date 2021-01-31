import React, { Component } from 'react'
import { OrderRemoteService } from '../../Remote'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import OrderDetail from '../order/OrderDetail'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
})

class OrderList extends Component {
  state = {
    orders: [],
    order: { customer: {}, payment: {} },
    dialogOpen: false
  }
  componentDidMount() {
    OrderRemoteService.getOrders().then(orders => {
      this.setState({ orders })
    })
  }
  toggleDialog = (val) => {
    this.setState({ dialogOpen: val })
  }
  getRecord = (id) => {
    OrderRemoteService.getOrderById(id).then(order => {
      this.setState({ order })
      this.toggleDialog(true)
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
        <OrderDetail open={ this.state.dialogOpen } order={ this.state.order } toggle={ () => this.toggleDialog(false) }/>
      </div>
    )
  }
}

export default (withStyles(useStyles)(OrderList))
