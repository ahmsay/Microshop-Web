import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  card: theme.card
})

const CustomerDetail = ({ open, customer, toggle, classes }) => {
  const closeDialog = () => { toggle() }
  return (
    <Dialog onClose={ closeDialog } open={ open }>
      <Card className={ classes.card }>
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
      </Card>
    </Dialog>
  )
}

export default (withStyles(useStyles)(CustomerDetail))
