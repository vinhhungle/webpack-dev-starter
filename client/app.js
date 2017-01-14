class AppCtrl {
  constructor () {
    this.message = 'Hello Webpack!'
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
      <button ng:click="$ctrl.onClick()">{{$ctrl.label}}</button>
    `
  })

  app.config(function($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    }

    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  })
}
