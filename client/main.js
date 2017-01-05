import './main.scss'
import angular from 'angular'

let rootEl = document.body.querySelector('#root')

const app = angular.module('main', [])

rootEl.innerHTML = '<app/>'
require('./app')(app)

angular.bootstrap(rootEl, [app.name])

module.exports = app
