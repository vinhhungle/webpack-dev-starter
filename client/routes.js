export default function (app) {
  app.component('helloComp', {
    template: '<h3>hello world!</h3>'
  })

  app.component('aboutComp', {
    template: '<h3>Its the UI-Router hello world app!</h3>'
  })

  app.config(function($stateProvider) {
    let homeState = {
      name: 'home',
      url: '',
      template: '<h2>Home</h2>'
    }

    let helloState = {
      name: 'hello',
      url: '/hello',
      template: '<hello-comp />'
    }

    let aboutState = {
      name: 'about',
      url: '/about',
      template: '<about-comp />'
    }

    $stateProvider.state(homeState)
    $stateProvider.state(helloState)
    $stateProvider.state(aboutState)
  })
}
