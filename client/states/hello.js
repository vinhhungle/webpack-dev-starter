export default () => {
  return {
    url: '/hello',
    resolve: {
      data: dataResolver
    },
    views: {
      'main': {
        template: '<hello-comp status="hello.status"></hello-comp>',
        controller: Controller,
        controllerAs: 'hello'
      },
      'sidebar': {
        template: '<sidebar-comp></sidebar-comp>'
      }
    }
  }
}

function dataResolver ($stateParams) {
  'ngInject'
  console.log('$stateParams', $stateParams)
  return new Promise((resolve, reject) => {
    resolve({ status: 'OK' })
  })
} 

class Controller {
  constructor (data) {
    'ngInject'
    console.log('HelloState', data)
    this.status = data.status
  }

  $onInit () {
    console.log('HelloState $onInit', this)
  }
}
