import axios from 'axios'

const RemoteService = {
  doTheThing() {
    axios.get('http://localhost:8081/customers/1').then(response => {
      console.log(response.data)
    })
  }
}

export default RemoteService
