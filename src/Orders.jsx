import React, { Component } from 'react'
import axios from 'axios'

class Orders extends Component {
  state = {
    orders: {
      name: 'orders',
      url: 'http://localhost:8083/orders',
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

export default Orders
