import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <nav>
      <Typography className={classes.root}>
        <Link to='/'>Dashboard</Link>
        <NavLink to='/customers'>Customers</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/payments'>Payments</NavLink>
        <NavLink to='/orders'>Orders</NavLink>
      </Typography>
    </nav>
  )
}

export default Navbar
