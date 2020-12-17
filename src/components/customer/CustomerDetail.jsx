import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'

const CustomerDetail = ({ open, customer, onClose }) => {
  const handleClose = () => { onClose() }
  return (
    <Dialog onClose={ handleClose } aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>Customer Detail</DialogTitle>
      <div>
        { customer.id }
      </div>
      <div>
        { customer.name }
      </div>
      <div>
        { customer.paymentList.length }
      </div>
      <div>
        { customer.orderList.length }
      </div>
    </Dialog>
  )
}

export default CustomerDetail
