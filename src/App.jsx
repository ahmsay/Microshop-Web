import React from 'react'
import Dashboard from './Dashboard'
import CustomerList from './customer/CustomerList'
import ProductList from './product/ProductList'
import PaymentList from './payment/PaymentList'
import OrderList from './order/OrderList'
import { Container } from '@material-ui/core'
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

const App = () => {
  return (
    <MuiThemeProvider theme={ theme }>
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Dashboard }/>
            <Route path='/customers' component={ CustomerList }/>
            <Route path='/products' component={ ProductList }/>
            <Route path='/payments' component={ PaymentList }/>
            <Route path='/orders' component={ OrderList }/>
          </Switch>
        </BrowserRouter>
      </Container>
    </MuiThemeProvider>
  )
}

export default App
