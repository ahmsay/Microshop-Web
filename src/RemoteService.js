import axios from 'axios'

const RemoteService = {
  getCustomers() {
    return new Promise(resolve => {
      axios.get('http://localhost:8081/customers').then(response => {
        resolve(response.data)
      })
    })
  }
}

export default RemoteService
