export default () => {
  return {
    url: '/{id: int}',
    template: `
      <div class="view-container">
        <h2>Viewing: {{$ctrl.user.name}}</h2>
        <button ng-click="$ctrl.goUp()">Go Up</button>
      </div>
    `,
    controller: Controller,
    controllerAs: '$ctrl'
  }
}

class Controller {
  constructor($state, data) {
    'ngInject'
    console.log('/users/'+$state.params.id)
    console.log('$state: ', $state)
    console.log('data: ', data)
    this.$state = $state
    this.user = data.users.find((item) => item.id === $state.params.id)
    console.log('user', this.user)
  }

  goUp () {
    console.log('go up')
    this.$state.go('^')
  }
}