import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import CustomerList from './components/customer/CustomerList'
import ProductList from './components/product/ProductList'
import PaymentList from './components/payment/PaymentList'
import OrderList from './components/order/OrderList'
import { Container } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const primary = '#1d1d1d'
const secondary = '#1ea891'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  },
  title: {
    color: secondary
  },
  list: {
    color: primary,
    backgroundColor: secondary
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={ theme }>
      <BrowserRouter>
        <Navbar/>
        <Container>
          <Switch>
            <Route exact path='/' component={ Dashboard }/>
            <Route path='/customers' component={ CustomerList }/>
            <Route path='/products' component={ ProductList }/>
            <Route path='/payments' component={ PaymentList }/>
            <Route path='/orders' component={ OrderList }/>
          </Switch>
        </Container>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
