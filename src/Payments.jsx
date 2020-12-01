import React, { Component } from 'react'
import axios from 'axios'

class Payments extends Component {
  state = {
    payments: {
      name: 'payments',
      url: 'http://localhost:8084/payments',
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
  render() {
    return (
      <div>payments</div>
    )
  }
}

export default Payments
