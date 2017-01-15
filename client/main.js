import './main.scss'

import angular from 'angular'
import 'angular-ui-router'

let rootEl = document.body.querySelector('#root')

const app = angular.module('main', ['ui.router'])

require('./routes')(app)

rootEl.innerHTML = require('./app')(app)
angular.bootstrap(rootEl, [app.name])

module.exports = app
