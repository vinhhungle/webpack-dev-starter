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
    this.getUser(this.$state.params.id)
    
  }

  $onDestroy () {
    this.storeUnsubscribe()
  }

  mapState (state) {
    return {
      user: state.user,
      users: state.users
    }
  }

  mapDispatch (dispatch) {
    return {
      setUser: (user) => dispatch(userActions.setUser(user)),
      fetchUserById: (id) => dispatch(userActions.fetchUserById(id))
    }
  }

  getUser (id) {
    let user
    if (Array.isArray(this.users.collection)) {
      user = this.users.collection.find((item) => item.id === id)
      console.log('user', user)

      if (user) {
        this.setUser(user)
      } else {
        this.fetchUserById(id)
      }
    } else {
      this.fetchUserById(id)
    }
  }

  goUp () {
    console.log('go up')
    this.$state.go('^')
  }
}