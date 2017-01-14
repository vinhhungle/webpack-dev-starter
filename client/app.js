class AppCtrl {
  constructor () {
    this.message = 'Hello Bootstrap!'
  }

  handleClick () {
    global.alert('Clicked')
  }
}

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
      <button ng:click="$ctrl.onClick()"class="btn btn-primary btn-lg">{{$ctrl.label}}</button>
    `
  })
}
