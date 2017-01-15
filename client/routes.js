export default (app) => {

  app.config(($stateProvider, $urlRouterProvider) => {
    'ngInject'
    
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', require('./states/home')())
      .state('login', require('./states/login')())
      .state('protected', require('./states/protected')())
      .state('hello', require('./states/hello')())
      .state('about', require('./states/about')())
      .state('about.history', require('./states/about.history')())
      .state('users', require('./states/users')())
      .state('users.detail', require('./states/users.detail')())
  })

  app.run(($rootScope, $state) => {
    $rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams) {
      console.log('$stateChangeStart')
      if (to.name === 'protected' && from.name !== 'login') {
        ev.preventDefault()
        $state.go('login', null, {notify: true})
      }
    })
  })
}
