import React, { Component } from 'react'
import axios from 'axios'

class ProductList extends Component {
  getRecord = (id) => {
    axios.get('http://localhost:8082/products/' + id).then(response => {
      console.log(response.data)
    })
  }
  render() {
    let { productList } = this.props
    let tableData = productList.map(product => {
      return (
        <tr key={ product.id }>
          <td onClick={ () => this.getRecord(product.id) }>{ product.id }</td>
          <td>{ product.name }</td>
          <td>{ product.price }</td>
          <td>{ product.category }</td>
          <td>{ product.paymentId }</td>
        </tr>
      )
    })
    let table = (
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
            { tableData }
          </tbody>
        </table>
      </div>
    )
    return (
      <div>
        { tableData.length !== 0 ? table : null }
      </div>
    )
  }
}

export default ProductList
