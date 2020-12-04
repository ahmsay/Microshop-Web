import axios from 'axios'

const urls = {
  accountService: 'http://localhost:8081',
  inventoryService: 'http://localhost:8082',
  paymentService: 'http://localhost:8084',
  orderService: 'http://localhost:8083'
}

const RemoteService = {
  getCustomers() {
    return new Promise(resolve => {
      axios.get(urls.accountService + '/customers').then(response => {
        resolve(response.data)
      })
    })
  },
  getProducts() {
    return new Promise(resolve => {
      axios.get(urls.inventoryService + '/products').then(response => {
        resolve(response.data)
      })
    })
  },
  getPayments() {
    return new Promise(resolve => {
      axios.get(urls.paymentService + '/payments').then(response => {
        resolve(response.data)
      })
    })
  },
  getOrders() {
    return new Promise(resolve => {
      axios.get(urls.orderService + '/orders').then(response => {
        resolve(response.data)
      })
    })
  }
}

export default RemoteService
