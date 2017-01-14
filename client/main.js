import './main.scss'

import angular from 'angular'
import 'angular-ui-router'

let rootEl = document.body.querySelector('#root')

const app = angular.module('main', ['ui.router'])

rootEl.innerHTML = '<app/>'
require('./routes')(app)
require('./app')(app)

angular.bootstrap(rootEl, [app.name])

module.exports = app
