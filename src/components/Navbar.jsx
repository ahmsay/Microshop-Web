import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography, ButtonGroup } from '@material-ui/core'

const Navbar = () => {
  const pages = [
    { title: 'Customers', route: '/customers' },
    { title: 'Products', route: '/products' },
    { title: 'Payments', route: '/payments' },
    { title: 'Orders', route: '/orders' }
  ]
  const buttons = pages.map(page => {
    return (
      <Button key={ page.route } component={ Link } to={ page.route }>
        <Typography>
          { page.title }
        </Typography>
      </Button>
    )
  })
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <ButtonGroup variant="text">
          { buttons }
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
