import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'

const CustomerDetail = ({ open, customer, onClose }) => {
  const handleClose = () => { onClose() }
  return (
    <Dialog onClose={ handleClose } open={open}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6">
            Customer Detail
          </Typography>
          <Typography variant="body2">
            Id: { customer.id }
          </Typography>
          <Typography variant="body2">
            Name: { customer.name }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Close</Button>
        </CardActions>
      </Card>
    </Dialog>
  )
}

export default CustomerDetail
