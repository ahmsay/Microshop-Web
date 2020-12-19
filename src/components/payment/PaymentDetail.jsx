import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  card: theme.card,
  table: theme.table,
  tableCell: theme.tableCell
})

const PaymentDetail = ({ open, customer, toggle, classes }) => {
  const closeDialog = () => { toggle() }
  return (
    <div>payment detail</div>
  )
}

export default (withStyles(useStyles)(PaymentDetail))
