import {titleActions} from './store/actions'

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
  }

  $onInit () {
    console.log('app $onInit', this)
    this.storeUnsubscribe = this.$ngRedux.connect(this.mapState, this.mapDispatch)(this)
  }

  $onDestroy () {
    this.storeUnsubscribe()
  }

  mapState (state) {
    return {
      message: state.title,
      prevState: state.router.prevState,
      prevParams: state.router.prevParams
    }
  }

  mapDispatch (dispatch) {
    return {
      updateMessage: (newVal) => dispatch(titleActions.updateTitle(newVal))
    }
  }

  handleClick () {
    console.log('Clicked')
    this.updateMessage('Action Fired')
  }

  goBack () {
    console.log('go back')
    if (this.prevState.name !== '') {
      this.$state.go(this.prevState.name, this.prevParams)
    }
  }
}
