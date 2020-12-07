import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography, ButtonGroup } from '@material-ui/core'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ButtonGroup variant="text">
          test
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
