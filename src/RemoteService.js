class RemoteService {

  constructor(a) {
    this.a = a;
  }

  doTheThing(param) {
    console.log(param, this.a)
  }
}

export default RemoteService
