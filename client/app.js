export default function (app) {
  require('./components/myButton')(app)

  app.component('app', {
    template: require('./app.tpl'),
    controller: AppCtrl,
    controllerAs: 'app'
  })

  return '<app></app>'
}

class AppCtrl {
  constructor () {
    this.message = 'Hello Webpack!'
  }

  handleClick () {
    console.log('Clicked')
  }
}
