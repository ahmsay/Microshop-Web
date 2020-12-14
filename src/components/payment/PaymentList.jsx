import React, { Component } from 'react'
import { PaymentRemoteService } from '../../RemoteService'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
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
    let listData = this.state.payments.map(payment => {
      return (
        <ListItem key={ payment.id } onClick={ () => this.getRecord(payment.id) } button>
          <ListItemText primary={ payment.id } secondary={ '$' + payment.totalCharge }/>
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
        <h3 className={ classes.title }>Payments</h3>
        { listData.length === 0 ? null : list }
      </div>
    )
  }
}

export default (withStyles(useStyles)(PaymentList))
