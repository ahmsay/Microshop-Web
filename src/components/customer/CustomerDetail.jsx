import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'

const SimpleDialog = ({ onClose, open }) => {
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog onClose={ handleClose } aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      test
    </Dialog>
  )
}

export default SimpleDialog
