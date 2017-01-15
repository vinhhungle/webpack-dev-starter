export default (app) => {

  require('./components/hello')(app)
  require('./components/about')(app)
  require('./components/sidebar')(app)

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

  app.run(($rootScope) => {
    'ngInject'

    $rootScope.$on('$stateChangeSuccess', (event, to, toParams, from, fromParams) => {
        console.log('$stateChangeSuccess', event)
        console.log('to state:')
        console.dir(to)
        console.dir(toParams)
        $rootScope.prevState = {
          state: from,
          params: fromParams
        }
        console.log('from state', $rootScope.prevState)
    })
  })
}
