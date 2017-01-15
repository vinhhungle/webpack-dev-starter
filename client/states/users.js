import {usersActions} from '../store/actions'

export default () => {
  return {
    url: '/users?filter',
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

class Controller {
  constructor($state, $ngRedux) {
    'ngInject'
    this.$ngRedux = $ngRedux
  }

  $onInit () {
    console.log('users $onInit', this)
    this.storeUnsubscribe = this.$ngRedux.connect(this.mapState, this.mapDispatch)(this)
    this.fetchUsers()
  }

  $onDestroy () {
    this.storeUnsubscribe()
  }

  mapState (state) {
    return {
      users: state.users
    }
  }

  mapDispatch (dispatch) {
    return {
      fetchUsers: () => dispatch(usersActions.fetchUsers())
    }
  }
}