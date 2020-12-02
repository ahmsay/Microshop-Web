import React, { Component } from 'react'
import axios from 'axios'

class Products extends Component {
  getRecords = (collection) => {
    axios.get(collection.url).then(response => {
      let col = this.state[collection.name]
      col.data = response.data
      this.setState({ col })
    })
  }
  render() {
    let { data } = this.props
    let productTable = data.map(product => {
      return (
        <tr key={ product.id }>
          <td>{ product.id }</td>
          <td>{ product.name }</td>
          <td>{ product.price }</td>
          <td>{ product.category }</td>
          <td>{ product.paymentId }</td>
        </tr>
      )
    })
    return (
      <div>
        <h3>Products</h3>
        <table id="productTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Payment Id</th>
            </tr>
          </thead>
          <tbody>
            { productTable }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Products
