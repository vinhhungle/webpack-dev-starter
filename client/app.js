class AppCtrl {
  constructor ($mdDialog) {
    this.message = 'Hello Angular Material!'
    this.$mdDialog = $mdDialog
    this.state = {
      myDate: new Date()
    }
  }

  handleClick () {
    console.log('Clicked')
  }

  showAlert (ev) {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    )
  }
}

AppCtrl.$inject = ['$mdDialog']

export default function (app) {
  app.component('app', {
    template: require('./app.tpl'),
    controller: AppCtrl,
    controllerAs: 'app'
  })

  app.component('myButton', {
    bindings: {
      label: '@',
      onClick: '&'
    },
    template: `
      <button ng:click="$ctrl.onClick()">{{$ctrl.label}}</button>
    `
  })
}
