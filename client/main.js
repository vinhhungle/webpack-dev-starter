import './main.scss'

import angular from 'angular'
import 'angular-material'

let rootEl = document.body.querySelector('#root')

const app = angular.module('main', ['ngMaterial'])

rootEl.innerHTML = '<app/>'
require('./app')(app)

angular.bootstrap(rootEl, [app.name])

module.exports = app
