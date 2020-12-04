import React, { Component } from 'react'
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
  getCustomers = () => {
    RemoteService.getCustomers().then(data => {
      let collection = this.state.customers
      collection.data = data
      this.setState({ collection })
    })
    console.log(this.state)
  }
  getProducts = () => {

  }
  getPayments = () => {
    
  }
  getOrders = () => {
    
  }
  render() {
    return (
      <div style={{ padding: 10, color: '#ffffff' }}>
        <button onClick={ () => this.getCustomers() }>Customers</button>
        <button onClick={ () => this.getProducts() }>Products</button>
        <button onClick={ () => this.getPayments() }>Payments</button>
        <button onClick={ () => this.getOrders() }>Orders</button>
        <CustomerList customerList={ this.state.customers.data }/>
        <ProductList productList={ this.state.products.data }/>
        <PaymentList paymentList={ this.state.payments.data }/>
        <OrderList orderList={ this.state.orders.data }/>
      </div>
    )
  }
}

export default App
