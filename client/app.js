export default function (app) {

  app.component('app', {
    template: require('./app.tpl'),
    controller: AppCtrl,
    controllerAs: 'app'
  })

  return '<app></app>'
}

class AppCtrl {
  constructor ($state, $ngRedux) {
    'ngInject'
    this.$ngRedux = $ngRedux
    this.$state = $state
    this.message = 'Hello Angular UI Router Redux!'
  }

  handleClick () {
    console.log('Clicked')
  }

  goBack () {
    console.log('go back')
    let {prevState, prevParams} = this.$ngRedux.getState().router
    console.log('prevState', prevState)

    if (prevState.name !== '') {
      this.$state.go(prevState.name, prevParams)
    }
  }
}
