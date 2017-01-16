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
  constructor($stateParams, $ngRedux) {
    'ngInject'
    this.$ngRedux = $ngRedux
    this.$stateParams = $stateParams
  }

  $onInit () {
    console.log('users $onInit', this)
    this.storeUnsubscribe = this.$ngRedux.connect(this.mapState, this.mapDispatch)(this)
    this.setFilter(this.$stateParams.filter)
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
      fetchUsers: () => dispatch(usersActions.fetchUsers()),
      setFilter: (filter) => dispatch(usersActions.setFilter(filter))
    }
  }

  getVisibleUsers () {
    let {filter, collection} = this.users
    if (filter) {
      return collection.filter((item) => item.name.indexOf(filter) > -1)
    }
    return collection
  }
  
}
