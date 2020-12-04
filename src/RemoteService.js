import axios from 'axios'

const RemoteService = {
  getCustomers() {
    return new Promise(resolve => {
      axios.get('http://localhost:8081/customers').then(response => {
        resolve(response.data)
      })
    })
  },
  getProducts() {
    return new Promise(resolve => {
      axios.get('http://localhost:8082/products').then(response => {
        resolve(response.data)
      })
    })
  },
  getPayments() {
    return new Promise(resolve => {
      axios.get('http://localhost:8084/payments').then(response => {
        resolve(response.data)
      })
    })
  },
  getOrders() {
    return new Promise(resolve => {
      axios.get('http://localhost:8083/orders').then(response => {
        resolve(response.data)
      })
    })
  }
}

export default RemoteService
