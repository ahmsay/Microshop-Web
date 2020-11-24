import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    urls: {
      customers: 'http://localhost:8081/customers',
      products: 'http://localhost:8082/products',
      payments: 'http://localhost:8083/orders',
      orders: 'http://localhost:8084/payments'
    },
    data: {
      customers: [],
      products: [],
      payments: [],
      orders: []
    }
  }
  fetch = (url) => {
    axios.get(url)
    .then(response => {
      console.table(response.data)
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={ () => this.fetch(this.state.urls.customers) }>Customers</button>
        <button onClick={ () => this.fetch(this.state.urls.products) }>Products</button>
        <button onClick={ () => this.fetch(this.state.urls.payments) }>Payments</button>
        <button onClick={ () => this.fetch(this.state.urls.orders) }>Orders</button>
        <br/>
      </div>
    )
  }
}

export default App
