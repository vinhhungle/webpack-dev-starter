import {userActions} from '../store/actions'

export default () => {
  return {
    url: '/{id: int}',
    template: `
      <div class="view-container">
        <h2>Viewing: {{$ctrl.user.data.name}} </h2>
        <button ng-disabled="$ctrl.user.isFetching" ng-click="$ctrl.goUp()">Go Up</button>
      </div>
    `,
    controller: Controller,
    controllerAs: '$ctrl'
  }
}

class Controller {
  constructor($state, $ngRedux) {
    'ngInject'
    console.log('/users/'+$state.params.id)
    console.log('$state: ', $state)
    
    this.$state = $state
    this.$ngRedux = $ngRedux
  }

  $onInit () {
    console.log('users.detail $onInit', this)
    this.storeUnsubscribe = this.$ngRedux.connect(this.mapState, this.mapDispatch)(this)
    this.findUserById(this.$state.params.id)
    
  }

  $onDestroy () {
    this.storeUnsubscribe()
  }

  mapState (state) {
    return {
      user: state.user
    }
  }

  mapDispatch (dispatch) {
    return {
      findUserById: (id) => dispatch(userActions.findUserById(id))
    }
  }

  goUp () {
    console.log('go up')
    this.$state.go('^')
  }
}