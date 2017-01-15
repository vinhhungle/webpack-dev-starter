export default function (app) {
  require('./components/myButton')(app)

  app.component('app', {
    template: require('./app.tpl'),
    controller: AppCtrl,
    controllerAs: 'app'
  })

  return '<app></app>'
}

class AppCtrl {
  constructor ($rootScope, $state) {
    'ngInject'
    this.$rootScope = $rootScope
    this.$state = $state
    this.message = 'Hello Webpack!'
  }

  handleClick () {
    console.log('Clicked')
  }

  goBack () {
    console.log('go back')
    let {state, params} = this.$rootScope.prevState
    if (state.name !== '') {
      this.$state.go(state.name, params)
    }
  }
}
