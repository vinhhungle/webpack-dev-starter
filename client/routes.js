export default (app) => {

  require('./components/hello')(app)
  require('./components/about')(app)
  require('./components/sidebar')(app)

  app.config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', require('./states/home')())
      .state('hello', require('./states/hello')())
      .state('about', require('./states/about')())
      .state('about.history', require('./states/about.history')())
  })
}
