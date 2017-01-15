import './main.scss'

import angular from 'angular'
import uiRouter from 'angular-ui-router'

import ngRedux from 'ng-redux'
import ngReduxUiRouter from 'redux-ui-router'

import components from './components'

let rootEl = document.body.querySelector('#root')

const app = angular.module('main', [components, uiRouter, ngRedux])

require('./routes')(app)

rootEl.innerHTML = require('./app')(app)
angular.bootstrap(rootEl, [app.name])

module.exports = app.name
