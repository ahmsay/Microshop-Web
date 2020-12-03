import React, { Component } from 'react'
import axios from 'axios'
import Customers from './customer/CustomerList'
import Products from './product/ProductList'
import Payments from './payment/PaymentList'
import Orders from './order/OrderList'

class App extends Component {
  state = {
    customers: {
      name: 'customers',
      url: 'http://localhost:8081/customers',
      data: []
    },
    products: {
      name: 'products',
      url: 'http://localhost:8082/products',
      data: []
    },
    orders: {
      name: 'orders',
      url: 'http://localhost:8083/orders',
      data: []
    },
    payments: {
      name: 'payments',
      url: 'http://localhost:8084/payments',
      data: []
    }
  }
  getRecords = (collection) => {
    axios.get(collection.url).then(response => {
      let newCollection = this.state[collection.name]
      newCollection.data = response.data
      this.setState({ newCollection })
    })
  }
  render() {
    return (
      <div style={{ padding: 10, color: '#ffffff' }}>
        <button onClick={ () => this.getRecords(this.state.customers) }>Customers</button>
        <button onClick={ () => this.getRecords(this.state.products) }>Products</button>
        <button onClick={ () => this.getRecords(this.state.payments) }>Payments</button>
        <button onClick={ () => this.getRecords(this.state.orders) }>Orders</button>
        <Customers customerList={ this.state.customers.data }/>
        <Products productList={ this.state.products.data }/>
        <Payments paymentList={ this.state.payments.data }/>
        <Orders orderList={ this.state.orders.data }/>
      </div>
    )
  }
}

export default App
