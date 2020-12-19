import React, { Component } from 'react'
import { PaymentRemoteService } from '../../RemoteService'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PaymentDetail from '../payment/PaymentDetail'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
})

class PaymentList extends Component {
  state = {
    payments: [],
    payment: { productList: [] },
    dialogOpen: false
  }
  componentDidMount() {
    PaymentRemoteService.getPayments().then(payments => {
      this.setState({ payments })
    })
  }
  toggleDialog = (val) => {
    this.setState({ dialogOpen: val })
  }
  getRecord = (id) => {
    PaymentRemoteService.getPaymentById(id).then(payment => {
      this.setState({ payment })
      this.toggleDialog(true)
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
        <PaymentDetail open={ this.state.dialogOpen } payment={ this.state.payment } toggle={ () => this.toggleDialog(false) }/>
      </div>
    )
  }
}

export default (withStyles(useStyles)(PaymentList))
