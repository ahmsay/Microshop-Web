import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  card: theme.card,
  table: theme.table,
  tableCell: theme.tableCell
})

const ProductDetail = ({ open, product, toggle, classes }) => {
  const closeDialog = () => { toggle() }
  const paymentInfo = (
    <div>
      <Typography gutterBottom variant="h6">
        <b>Payment Information</b>
      </Typography>
      <Typography variant="body1">
        Id: { product.payment.id }
      </Typography>
      <Typography variant="body1">
        Total Charge: { product.payment.totalCharge }
      </Typography>
    </div>
  )
  return (
    <Dialog onClose={ closeDialog } open={ open }>
      <Card className={ classes.card }>
        <CardContent>
          <Typography gutterBottom variant="h6">
            <b>Product Detail</b>
          </Typography>
          <Typography variant="body1">
            Id: { product.id }
          </Typography>
          <Typography variant="body1">
            Name: { product.name }
          </Typography>
          <Typography variant="body1">
            Category: { product.category }
          </Typography>
          <Typography variant="body1">
            Price: { product.price }
          </Typography>
          { paymentInfo }
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ closeDialog }>Close</Button>
        </CardActions>
      </Card>
    </Dialog>
  )
}

export default (withStyles(useStyles)(ProductDetail))
