import React, { Component } from 'react'
import { InventoryRemoteService } from '../../Remote'
import { List, ListItem, ListItemText, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ProductDetail from '../product/ProductDetail'
import AddProduct from '../product/AddProduct'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
})

class ProductList extends Component {
  state = {
    products: [],
    product: { payment: {} },
    dialogOpen: false
  }
  componentDidMount() {
    InventoryRemoteService.getProducts().then(products => {
      this.setState({ products })
    })
  }
  toggleDialog = (val) => {
    this.setState({ dialogOpen: val })
  }
  getRecord = (id) => {
    InventoryRemoteService.getProductById(id).then(product => {
      this.setState({ product })
      this.toggleDialog(true)
    })
  }
  render() {
    const { classes } = this.props
    const listData = this.state.products.map(product => {
      return (
        <ListItem key={ product.id } onClick={ () => this.getRecord(product.id) } button>
          <ListItemText primary={ product.name } secondary={ '$' + product.price }/>
        </ListItem>
      )
    })
    const list = (
      <List className={ classes.list }>
        { listData }
      </List>
    )
    return (
      <div>
        <h3 className={ classes.title }>Products</h3>
        <Grid container direction={"row"} spacing={2}>
          <Grid item>
            { listData.length === 0 ? null : list }
          </Grid>
          <Grid item>
            <AddProduct/>
          </Grid>
        </Grid>
        <ProductDetail open={ this.state.dialogOpen } product={ this.state.product } toggle={ () => this.toggleDialog(false) }/>
      </div>
    )
  }
}

export default (withStyles(useStyles)(ProductList))
