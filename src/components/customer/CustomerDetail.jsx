import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  card: theme.card
})

const CustomerDetail = ({ open, customer, toggle, classes }) => {
  const closeDialog = () => { toggle() }
  const paymentList = (
    <div>
      <Typography variant="body1">Payment List</Typography>
      <TableContainer component={ Paper }>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.paymentList.map((payment) => (
              <TableRow key={ payment.id }>
                <TableCell component="th">{ payment.id }</TableCell>
                <TableCell align="right">{ payment.totalCharge }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
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
          { paymentList }
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ closeDialog }>Close</Button>
        </CardActions>
      </Card>
    </Dialog>
  )
}

export default (withStyles(useStyles)(CustomerDetail))
