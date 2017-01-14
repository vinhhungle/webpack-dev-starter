export default function (app) {
  app.component('helloComp', {
    template: '<h3>hello world!</h3>'
  })

  app.component('aboutComp', {
    template: '<h3>Its the UI-Router hello world app!</h3>'
  })

  app.component('sidebarComp', {
    template: '<h3>Sidebar contents</h3>'
  })

  app.config(function($stateProvider) {
    let rootState = {
      name: 'root',
      url: '',
      views: {
        'main': {
          template: '<h2>Home</h2>'
        },
        'sidebar': {
          template: '<sidebar-comp />'
        }
      }
    }

    let homeState = {
      name: 'home',
      url: '/',
      views: {
        'main': {
          template: '<h2>Home</h2>'
        },
        'sidebar': {
          template: '<sidebar-comp />'
        }
      }
    }

    let helloState = {
      name: 'hello',
      url: '/hello',
      views: {
        'main': {
          template: '<hello-comp />'
        },
        'sidebar': {
          template: '<sidebar-comp />'
        }
      }
    }

    let aboutState = {
      name: 'about',
      url: '/about',
      views: {
        'main': {
          template: '<about-comp />'
        },
        'sidebar': {
          template: '<sidebar-comp />'
        }
      }
    }

    $stateProvider.state(rootState)
    $stateProvider.state(homeState)
    $stateProvider.state(helloState)
    $stateProvider.state(aboutState)
  })
}
