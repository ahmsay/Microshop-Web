import React, { Component } from 'react'
import CustomerList from './customer/CustomerList'
import ProductList from './product/ProductList'
import PaymentList from './payment/PaymentList'
import OrderList from './order/OrderList'
import { AccountRemoteService, InventoryRemoteService, PaymentRemoteService, OrderRemoteService } from './RemoteService'

class App extends Component {
  state = {
    customers: [],
    products: [],
    payments: [],
    orders: []
  }
  getCustomers = () => {
    AccountRemoteService.getCustomers().then(customers => {
      this.setState({ customers })
    })
  }
  getProducts = () => {
    InventoryRemoteService.getProducts().then(products => {
      this.setState({ products })
    })
  }
  getPayments = () => {
    PaymentRemoteService.getPayments().then(payments => {
      this.setState({ payments })
    })
  }
  getOrders = () => {
    OrderRemoteService.getOrders().then(orders => {
      this.setState({ orders })
    })
  }
  render() {
    return (
      <div style={{ padding: 10, color: '#ffffff' }}>
        <button onClick={ () => this.getCustomers() }>Customers</button>
        <button onClick={ () => this.getProducts() }>Products</button>
        <button onClick={ () => this.getPayments() }>Payments</button>
        <button onClick={ () => this.getOrders() }>Orders</button>
        <CustomerList customerList={ this.state.customers }/>
        <ProductList productList={ this.state.products }/>
        <PaymentList paymentList={ this.state.payments }/>
        <OrderList orderList={ this.state.orders }/>
      </div>
    )
  }
}

export default App
