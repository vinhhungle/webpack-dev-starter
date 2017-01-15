export default (app) => {

  app.config(($stateProvider, $urlRouterProvider) => {
    'ngInject'
    
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', require('./states/home')())
      .state('hello', require('./states/hello')())
      .state('about', require('./states/about')())
      .state('about.history', require('./states/about.history')())
      .state('users', require('./states/users')())
      .state('users.detail', require('./states/users.detail')())
  })
}
