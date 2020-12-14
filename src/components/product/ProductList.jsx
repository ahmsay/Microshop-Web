import React, { Component } from 'react'
import { InventoryRemoteService } from '../../RemoteService'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  title: theme.title,
  list: theme.list
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
    let listData = this.state.products.map(product => {
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
        { listData.length === 0 ? null : list }
      </div>
    )
  }
}

export default (withStyles(useStyles)(ProductList))
