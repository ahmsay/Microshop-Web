import React, { Component } from 'react'

class Products extends Component {
  render() {
    let { productList } = this.props
    let productTable = productList.map(product => {
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
