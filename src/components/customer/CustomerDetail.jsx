import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid'

const useStyles = (theme) => ({
  card: theme.card
})

const CustomerDetail = ({ open, customer, toggle, classes }) => {
  const closeDialog = () => { toggle() }
  const paymentColumns = [
    { field: 'id', headerName: 'Id', width: 70 },
    { field: 'totalCharge', headerName: 'Total Charge', width: 130 }
  ]
  return (
    <Dialog onClose={ closeDialog } open={ open }>
      <Card style={{ width: 500, height: 500 }} className={ classes.card }>
        <CardContent>
          <Typography gutterBottom variant="h6">
            Customer Detail
          </Typography>
          <Typography variant="body1">
            Id: { customer.id }
          </Typography>
          <Typography variant="body1">
            Name: { customer.name }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ closeDialog }>Close</Button>
        </CardActions>
        <DataGrid rows={ customer.paymentList } columns={ paymentColumns }/>
      </Card>
    </Dialog>
  )
}

export default (withStyles(useStyles)(CustomerDetail))
