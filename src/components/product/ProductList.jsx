import React, { Component } from 'react'
import { InventoryRemoteService } from '../../RemoteService'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  table: theme.table,
  title: theme.title,
  tableCell: theme.tableCell
})

class ProductList extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    InventoryRemoteService.getProducts().then(products => {
      this.setState({ products })
    })
  }
  getRecord = (id) => {
    InventoryRemoteService.getProductById(id).then(product => {
      console.log(product)
    })
  }
  render() {
    const { classes } = this.props
    let tableData = this.state.products.map(product => {
      return (
        <TableRow key={ product.id } onClick={ () => this.getRecord(product.id) }>
          <TableCell className={ classes.tableCell } component="th" scope="row">{ product.id }</TableCell>
          <TableCell className={ classes.tableCell } align="right">{ product.name }</TableCell>
          <TableCell className={ classes.tableCell } align="right">{ product.price }</TableCell>
          <TableCell className={ classes.tableCell } align="right">{ product.category }</TableCell>
          <TableCell className={ classes.tableCell } align="right">{ product.paymentId }</TableCell>
        </TableRow>
      )
    })
    let table = (
      <TableContainer className={ classes.table } component={ Paper }>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={ classes.tableCell }>Id</TableCell>
              <TableCell className={ classes.tableCell } align="right">Name</TableCell>
              <TableCell className={ classes.tableCell } align="right">Price</TableCell>
              <TableCell className={ classes.tableCell } align="right">Category</TableCell>
              <TableCell className={ classes.tableCell } align="right">Payment Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { tableData }
          </TableBody>
        </Table>
      </TableContainer>
    )
    return (
      <div>
        <h3 className={ classes.title }>Products</h3>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default (withStyles(useStyles)(ProductList))
