import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    customers: {
      url: 'http://localhost:8081/customers',
      data: []
    },
    products: {
      url: 'http://localhost:8081/customers',
      data: []
    },
    orders: {
      url: 'http://localhost:8083/orders',
      data: []
    },
    payments: {
      url: 'http://localhost:8084/payments',
      data: []
    }
  }
  getRecords = (url, collection) => {
    axios.get(url).then(response => {
      let data = this.state.data
      data[collection] = response.data
      this.setState({ data })
    })
  }
  render() {
    let customerTable = this.state.customers.data.map(customer => {
      return (
        <tr>
          <td>{ customer.id }</td>
          <td>{ customer.name }</td>
        </tr>
      )
    })
    let productTable = this.state.products.data.map(product => {
      return (
        <tr>
          <td>{ product.id }</td>
          <td>{ product.name }</td>
          <td>{ product.price }</td>
          <td>{ product.category }</td>
          <td>{ product.paymentId }</td>
        </tr>
      )
    })
    let paymentTable = this.state.payments.data.map(payment => {
      return (
        <tr>
          <td>{ payment.id }</td>
          <td>{ payment.totalCharge }</td>
          <td>{ payment.customerId }</td>
        </tr>
      )
    })
    let orderTable = this.state.orders.data.map(order => {
      return (
        <tr>
          <td>{ order.id }</td>
          <td>{ order.status }</td>
          <td>{ order.customerId }</td>
          <td>{ order.paymentId }</td>
        </tr>
      )
    })
    return (
      <div className="App">
        <button onClick={ () => this.getRecords(this.state.customers.url, 'customers') }>Customers</button>
        <button onClick={ () => this.getRecords(this.state.products.url, 'products') }>Products</button>
        <button onClick={ () => this.getRecords(this.state.payments.url, 'payments') }>Payments</button>
        <button onClick={ () => this.getRecords(this.state.orders.url, 'orders') }>Orders</button>
        <br/>
        <table id="customerTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { customerTable }
          </tbody>
        </table>
        <table id="productTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Payment Id</th>
            </tr>
          </thead>
          <tbody>
            { productTable }
          </tbody>
        </table>
        <table id="paymentTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Total Charge</th>
              <th>Customer Id</th>
            </tr>
          </thead>
          <tbody>
            { paymentTable }
          </tbody>
        </table>
        <table id="orderTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Status</th>
              <th>Customer Id</th>
              <th>Payment Id</th>
            </tr>
          </thead>
          <tbody>
            { orderTable }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
