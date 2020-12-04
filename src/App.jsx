import React, { Component } from 'react'
import axios from 'axios'
import CustomerList from './customer/CustomerList'
import ProductList from './product/ProductList'
import PaymentList from './payment/PaymentList'
import OrderList from './order/OrderList'
import RemoteService from './RemoteService'

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
  test = (param) => {
    let rm = new RemoteService('hello')
    rm.doTheThing(param)
  }
  render() {
    return (
      <div style={{ padding: 10, color: '#ffffff' }}>
        <button onClick={ () => this.getRecords(this.state.customers) }>Customers</button>
        <button onClick={ () => this.getRecords(this.state.products) }>Products</button>
        <button onClick={ () => this.getRecords(this.state.payments) }>Payments</button>
        <button onClick={ () => this.getRecords(this.state.orders) }>Orders</button>
        <button onClick={ () => this.test(1) }>Do the thing</button>
        <CustomerList customerList={ this.state.customers.data }/>
        <ProductList productList={ this.state.products.data }/>
        <PaymentList paymentList={ this.state.payments.data }/>
        <OrderList orderList={ this.state.orders.data }/>
      </div>
    )
  }
}

export default App
