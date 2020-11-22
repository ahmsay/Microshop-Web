import React, { Component } from 'react'

class App extends Component {
  state = {
    urls: {
      customers: 'localhost:8081/customers',
      products: 'localhost:8082/products',
      payments: 'localhost:8083/payments',
      orders: 'localhost:8084/orders'
    }
  }
  fetch = (url) => {
    console.log(url)
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
