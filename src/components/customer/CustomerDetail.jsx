import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'

const SimpleDialog = ({ open, customer, onClose }) => {
  console.log(customer)
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog onClose={ handleClose } aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>Title</DialogTitle>
      <div>
        asd
      </div>
    </Dialog>
  )
}

export default SimpleDialog
