import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    urls: {
      customers: 'http://localhost:8081/customers',
      products: 'http://localhost:8082/products',
      orders: 'http://localhost:8083/orders',
      payments: 'http://localhost:8084/payments'
    },
    data: {
      customers: [],
      products: [],
      orders: [],
      payments: []
    }
  }
  getCustomers = (url) => {
    axios.get(url)
    .then(response => {
      this.setState({
        data: {
          customers: response.data,
          products: []
        }
      })
    })
  }
  getProducts = (url) => {
    axios.get(url)
    .then(response => {
      this.setState({
        data: {
          products: response.data
        }
      })
    })
  }
  getOrders = (url) => {
    axios.get(url)
    .then(response => {
      this.setState({
        data: {
          orders: response.data
        }
      })
    })
  }
  getPayments = (url) => {
    axios.get(url)
    .then(response => {
      this.setState({
        data: {
          payments: response.data
        }
      })
    })
  }
  render() {
    let customerTable = this.state.data.customers.map(customer => {
      return (
        <tr>
          <td>{ customer.id }</td>
          <td>{ customer.name }</td>
        </tr>
      )
    })
    let productTable = this.state.data.products.map(product => {
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
    /*let paymentTable = this.state.data.payments.map(payment => {
      return (
        <tr>
          <td>{ payment.id }</td>
          <td>{ payment.totalCharge }</td>
          <td>{ payment.customerId }</td>
        </tr>
      )
    })*/
    /*let orderTable = this.state.data.customers.map(order => {
      return (
        <tr>
          <td>{ order.id }</td>
          <td>{ order.status }</td>
          <td>{ order.customerId }</td>
          <td>{ order.paymentId }</td>
        </tr>
      )
    })*/
    return (
      <div className="App">
        <button onClick={ () => this.getCustomers(this.state.urls.customers) }>Customers</button>
        <button onClick={ () => this.getProducts(this.state.urls.products) }>Products</button>
        <button onClick={ () => this.getPayments(this.state.urls.payments) }>Payments</button>
        <button onClick={ () => this.getOrders(this.state.urls.orders) }>Orders</button>
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
        {/*<table id="productTable">
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
        </table>*/}
        {/*<table id="paymentTable">
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
        </table>*/}
        {/*<table id="orderTable">
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
        </table>*/}
      </div>
    )
  }
}

export default App
