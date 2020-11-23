import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    urls: {
      customers: 'http://localhost:8081/customers',
      products: 'http://localhost:8082/products',
      payments: 'http://localhost:8083/orders',
      orders: 'http://localhost:8084/payments'
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
        <br/>
        <button onClick={ () => this.fetch(this.state.urls.products) }>Products</button>
        <br/>
        <button onClick={ () => this.fetch(this.state.urls.payments) }>Payments</button>
        <br/>
        <button onClick={ () => this.fetch(this.state.urls.orders) }>Orders</button>
      </div>
    )
  }
}

export default App
