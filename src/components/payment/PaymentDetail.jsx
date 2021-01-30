import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  card: theme.card,
  table: theme.table,
  tableCell: theme.tableCell
})

const PaymentDetail = ({ open, payment, toggle, classes }) => {
  const closeDialog = () => { toggle() }
  const customerInfo = (
    <div>
      <Typography gutterBottom variant="h6">
        <b>Customer Information</b>
      </Typography>
      <Typography variant="body1">
        Id: { payment.customer.id }
      </Typography>
      <Typography variant="body1">
        Name: { payment.customer.name }
      </Typography>
    </div>
  )
  const productList = (
    <div>
      <Typography variant="body1">
        <b>Product List</b>
      </Typography>
      <TableContainer>
        <Table className={ classes.table }>
          <TableHead>
            <TableRow>
              <TableCell className={ classes.tableCell }>Id</TableCell>
              <TableCell className={ classes.tableCell } align="right">Name</TableCell>
              <TableCell className={ classes.tableCell } align="right">Category</TableCell>
              <TableCell className={ classes.tableCell } align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payment.productList.map((product) => (
              <TableRow key={ product.id }>
                <TableCell className={ classes.tableCell } component="th">{ product.id }</TableCell>
                <TableCell className={ classes.tableCell } align="right">{ product.name }</TableCell>
                <TableCell className={ classes.tableCell } align="right">{ product.category }</TableCell>
                <TableCell className={ classes.tableCell } align="right">{ product.price }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
  return (
    <Dialog onClose={ closeDialog } open={ open } fullWidth={ true } maxWidth={ 'sm' }>
      <Card className={ classes.card }>
        <CardContent>
          <Typography gutterBottom variant="h6">
            <b>Payment Detail</b>
          </Typography>
          <Typography variant="body1">
            Id: { payment.id }
          </Typography>
          <Typography variant="body1">
            Total Charge: { payment.totalCharge }
          </Typography>
          { customerInfo }
          { productList }
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ closeDialog }>Close</Button>
        </CardActions>
      </Card>
    </Dialog>
  )
}

export default (withStyles(useStyles)(PaymentDetail))
