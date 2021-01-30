import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  card: theme.card,
  table: theme.table,
  tableCell: theme.tableCell
})

const OrderDetail = ({ open, order, toggle, classes }) => {
  const closeDialog = () => { toggle() }
  const customerInfo = (
    <div>
      <Typography gutterBottom variant="h6">
        <b>Customer Information</b>
      </Typography>
      <Typography variant="body1">
        Id: { order.customer.id }
      </Typography>
      <Typography variant="body1">
        Name: { order.customer.name }
      </Typography>
    </div>
  )
  const paymentInfo = (
    <div>
      <Typography gutterBottom variant="h6">
        <b>Payment Information</b>
      </Typography>
      <Typography variant="body1">
        Id: { order.payment.id }
      </Typography>
      <Typography variant="body1">
        Total Charge: { order.payment.totalCharge }
      </Typography>
    </div>
  )
  return (
    <Dialog onClose={ closeDialog } open={ open } fullWidth={ true } maxWidth={ 'sm' }>
      <Card className={ classes.card }>
        <CardContent>
          <Typography gutterBottom variant="h6">
            <b>Order Detail</b>
          </Typography>
          <Typography variant="body1">
            Id: { order.id }
          </Typography>
          <Typography variant="body1">
            Status: { order.status }
          </Typography>
          { customerInfo }
          { paymentInfo }
        </CardContent>
        <CardActions>
          <Button onClick={ closeDialog }>Close</Button>
        </CardActions>
      </Card>
    </Dialog>
  )
}

export default (withStyles(useStyles)(OrderDetail))
