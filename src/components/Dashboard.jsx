import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({
  title: theme.title
})

const DashBoard = ({ classes }) => {
  return (
    <div>
      <h3 className={ classes.title }>Dashboard</h3>
    </div>
  )
}

export default (withStyles(useStyles)(DashBoard))
