import React, { Component } from 'react'
import { InventoryRemoteService } from '../../RemoteService'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

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
    let tableData = this.state.products.map(product => {
      return (
        <TableRow key={ product.id }>
          <TableCell onClick={ () => this.getRecord(product.id) } component="th" scope="row">
            { product.id }
          </TableCell>
          <TableCell align="right">{ product.name }</TableCell>
          <TableCell align="right">{ product.price }</TableCell>
          <TableCell align="right">{ product.category }</TableCell>
          <TableCell align="right">{ product.paymentId }</TableCell>
        </TableRow>
      )
    })
    let table = (
      <TableContainer component={ Paper }>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Payment Id</TableCell>
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
        <h3>Products</h3>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default ProductList
