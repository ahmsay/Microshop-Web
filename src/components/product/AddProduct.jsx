import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, Typography, TextField, Card, CardContent, CardActions, Grid } from '@material-ui/core'

const useStyles = (theme) => ({
  card: theme.card
})

class AddProduct extends Component {
  state = {
    name: '',
    price: 0,
    category: ''
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
          <CardContent style={{ paddingTop: 20 }}>
            <Typography variant="body1">
              <b>Add New Product</b>
            </Typography>
            <Grid container direction={"row"} spacing={2}>
              <Grid item>
                <TextField id="name" label="Name" onChange={ this.handleChange }/>
              </Grid>
              <Grid item>
                <TextField id="price" label="Price" type="number" onChange={ this.handleChange }/>
              </Grid>
              <Grid item>
                <TextField id="category" label="Category" onChange={ this.handleChange }/>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit">Add</Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

export default withStyles(useStyles)(AddProduct)
