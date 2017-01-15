export default () => {
  return {
    url: '/hello',
    resolve: {
      data: dataResolver
    },
    custom: {
      test: 1
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
  constructor (data, $state) {
    'ngInject'
    console.log('HelloState', data)
    this.status = data.status

    let customData = $state.get('hello').custom
    console.log('customData', customData)
  }

  $onInit () {
    console.log('HelloState $onInit', this)
  }
}
