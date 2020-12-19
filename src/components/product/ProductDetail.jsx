import React from 'react'
import { Dialog, Card, CardContent, CardActions, Button, Typography, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  card: theme.card,
  table: theme.table,
  tableCell: theme.tableCell
})

const ProductDetail = ({ open, customer, toggle, classes }) => {
  const closeDialog = () => { toggle() }
  return (
    <div>product detail</div>
  )
}

export default (withStyles(useStyles)(ProductDetail))
