import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Button, Typography, TextField, Card, CardContent, CardActions} from '@material-ui/core'

const useStyles = (theme) => ({
    card: theme.card
})

class AddCustomer extends Component {
  state = {
      name: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    const { classes } = this.props
    return (
      <form onSubmit={ this.handleSubmit }>
        <Card className={ classes.card }>
          <CardContent style={{ paddingTop: 20}}>
            <Typography variant="body1">
              <b>Add New Customer</b>
            </Typography>
            <TextField id="name" label="Name" onChange={ this.handleChange }/>
          </CardContent>
          <CardActions>
            <Button type="submit">Add</Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

export default withStyles(useStyles)(AddCustomer)
