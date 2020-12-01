import React, { Component } from 'react'
import axios from 'axios'

class Customers extends Component {
  state = {
    customers: {
      name: 'customers',
      url: 'http://localhost:8081/customers',
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

export default Customers
