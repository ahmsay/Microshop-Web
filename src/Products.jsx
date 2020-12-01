import React, { Component } from 'react'
import axios from 'axios'

class Products extends Component {
  state = {
    products: {
      name: 'products',
      url: 'http://localhost:8082/products',
      data: []
    }
  }
  getRecords = (collection) => {
    axios.get(collection.url).then(response => {
      let col = this.state[collection.name]
      col.data = response.data
      this.setState({ col })
    })
  }
}

export default Products
