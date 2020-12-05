import React, { Component } from 'react'
import CustomerList from './customer/CustomerList'
import ProductList from './product/ProductList'
import PaymentList from './payment/PaymentList'
import OrderList from './order/OrderList'
import { AccountRemoteService, InventoryRemoteService, PaymentRemoteService, OrderRemoteService } from './RemoteService'
import { Container, Button } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const primary = '#1ea891'
const secondary = '#ffffff'

const theme = createMuiTheme({
  button: {
    backgroundColor: primary,
    color: secondary
  }
})

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
      <MuiThemeProvider theme={ theme }>
        <Container>
          <Button onClick={ () => this.getCustomers() }>Customers</Button>
          <Button onClick={ () => this.getProducts() }>Products</Button>
          <Button onClick={ () => this.getPayments() }>Payments</Button>
          <Button onClick={ () => this.getOrders() }>Orders</Button>
          <CustomerList customerList={ this.state.customers }/>
          <ProductList productList={ this.state.products }/>
          <PaymentList paymentList={ this.state.payments }/>
          <OrderList orderList={ this.state.orders }/>
        </Container>
      </MuiThemeProvider>
    )
  }
}

export default App
