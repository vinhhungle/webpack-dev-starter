export default (app) => {
  app.component('helloComp', {
    template: '<h3>hello world! {{$ctrl.status}}</h3>',
    bindings: {
      status: '<'
    },
    controller: Controller
  })
}

class Controller {
  constructor () {
    console.log('HelloComp', this)
  }

  $onInit () {
    console.log('HelloComp $onInit', this)
  }
}
