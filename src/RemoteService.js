function privateFunction() {
  console.log('private func is invoked')
}

const RemoteService = {
  doTheThing(param) {
    privateFunction()
    console.log(param)
  }
}

export default RemoteService
