import React, { Component } from 'react'
import axios from 'axios'

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
      let col = this.state[collection.name]
      col.data = response.data
      this.setState({ col })
    })
  }
  render() {
    let customerTable = this.state.customers.data.map(customer => {
      return (
        <tr key={ customer.id }>
          <td>{ customer.id }</td>
          <td>{ customer.name }</td>
        </tr>
      )
    })
    let productTable = this.state.products.data.map(product => {
      return (
        <tr key={ product.id }>
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
        <tr key={ payment.id }>
          <td>{ payment.id }</td>
          <td>{ payment.totalCharge }</td>
          <td>{ payment.customerId }</td>
        </tr>
      )
    })
    let orderTable = this.state.orders.data.map(order => {
      return (
        <tr key={ order.id }>
          <td>{ order.id }</td>
          <td>{ order.status }</td>
          <td>{ order.customerId }</td>
          <td>{ order.paymentId }</td>
        </tr>
      )
    })
    return (
      <div className="App">
        <button onClick={ () => this.getRecords(this.state.customers) }>Customers</button>
        <button onClick={ () => this.getRecords(this.state.products) }>Products</button>
        <button onClick={ () => this.getRecords(this.state.payments) }>Payments</button>
        <button onClick={ () => this.getRecords(this.state.orders) }>Orders</button>
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
