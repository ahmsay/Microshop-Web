import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  card: theme.card,
  table: theme.table,
  tableCell: theme.tableCell
})

const OrderDetail = ({ open, order, toggle, classes }) => {
  const closeDialog = () => { toggle() }
  return (
    <Dialog onClose={ closeDialog } open={ open }>
      <div>order detail</div>
    </Dialog>
  )
}

export default (withStyles(useStyles)(OrderDetail))
