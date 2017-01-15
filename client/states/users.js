export default () => {
  return {
    url: '/users?filter',
    resolve: {
      data: dataResolver
    },
    views: {
      'main': {
        template: require('./views/users.tpl'),
        controller: Controller,
        controllerAs: '$ctrl'
      },
      'sidebar': {
        template: '<sidebar-comp></sidebar-comp>'
      }
    }
  }
}

let users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 11' },
  { id: 3, name: 'User 21' },
  { id: 4, name: 'User 2' },
  { id: 5, name: 'User 3' }
]

function dataResolver ($stateParams) {
  'ngInject'
  console.log('/users?filter='+$stateParams.filter)
  return new Promise((resolve, reject) => {
    if ($stateParams.filter) {
      resolve({ users: users.filter((item) => item.name.indexOf($stateParams.filter) > -1) })
    } else {
      resolve({ users })
    }
  })
} 

class Controller {
  constructor(data) {
    'ngInject'
    this.users = data.users
  }
}