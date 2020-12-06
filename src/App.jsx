import React, { Component } from 'react'
import Dashboard from './Dashboard'
import CustomerList from './customer/CustomerList'
import ProductList from './product/ProductList'
import PaymentList from './payment/PaymentList'
import OrderList from './order/OrderList'
import { AccountRemoteService, InventoryRemoteService, PaymentRemoteService, OrderRemoteService } from './RemoteService'
import { Container, Button } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
      <BrowserRouter>
        <MuiThemeProvider theme={ theme }>
          <Container>
            <Switch>
              <Route exact path='/' component={ Dashboard }/>
              <Route path='/customers' component={ CustomerList }/>
              <Route path='/products' component={ ProductList }/>
              <Route path='/payments' component={ PaymentList }/>
              <Route path='/orders' component={ OrderList }/>
            </Switch>
          </Container>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
