import React, { Component } from 'react'
import { AccountRemoteService } from '../../RemoteService'
import { List, ListItem, ListItemText, Dialog, DialogTitle, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
})

function SimpleDialog(props) {
  const { onClose, open } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={ handleClose } aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      test
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

class CustomerList extends Component {
  state = {
    customers: [],
    open: false
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
    const handleClickOpen = () => {
      console.log(1)
      this.setState({ open: true })
    }
    const handleClose = () => {
      this.setState({ open: false })
    }
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
        <Button variant="outlined" color="secondary" onClick={ handleClickOpen }>
          Open simple dialog
        </Button>
        <SimpleDialog open={this.state.open} onClose={ handleClose } />
      </div>
    )
  }
}

export default (withStyles(useStyles)(CustomerList))
