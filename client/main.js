import './main.scss'

import angular from 'angular'
import 'angular-ui-bootstrap'

let rootEl = document.body.querySelector('#root')

const app = angular.module('main', ['ui.bootstrap'])

rootEl.innerHTML = '<app/>'
require('./app')(app)

angular.bootstrap(rootEl, [app.name])

module.exports = app
