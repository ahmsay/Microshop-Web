import axios from 'axios'

const urls = {
  accountService: 'http://localhost:8081',
  inventoryService: 'http://localhost:8082',
  paymentService: 'http://localhost:8084',
  orderService: 'http://localhost:8083'
}

const AccountRemoteService = {
  getCustomers() {
    return new Promise(resolve => {
      axios.get(urls.accountService + '/customers').then(response => {
        resolve(response.data)
      })
    })
  },
  getCustomerById(id) {
    return new Promise(resolve => {
      axios.get(urls.accountService + '/customers/' + id).then(response => {
        resolve(response.data)
      })
    })
  }
}

const InventoryRemoteService = {
  getProducts() {
    return new Promise(resolve => {
      axios.get(urls.inventoryService + '/products').then(response => {
        resolve(response.data)
      })
    })
  },
  getProductById(id) {
    return new Promise(resolve => {
      axios.get(urls.inventoryService + '/products/' + id).then(response => {
        resolve(response.data)
      })
    })
  }
}

const PaymentRemoteService = {
  getPayments() {
    return new Promise(resolve => {
      axios.get(urls.paymentService + '/payments').then(response => {
        resolve(response.data)
      })
    })
  },
  getPaymentById(id) {
    return new Promise(resolve => {
      axios.get(urls.paymentService + '/payments/' + id).then(response => {
        resolve(response.data)
      })
    })
  }
}

const OrderRemoteService = {
  getOrders() {
    return new Promise(resolve => {
      axios.get(urls.orderService + '/orders').then(response => {
        resolve(response.data)
      })
    })
  },
  getOrderById(id) {
    return new Promise(resolve => {
      axios.get(urls.orderService + '/orders/' + id).then(response => {
        resolve(response.data)
      })
    })
  }
}

export { AccountRemoteService, InventoryRemoteService, PaymentRemoteService, OrderRemoteService }
