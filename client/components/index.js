import angular from 'angular'

const ngMod = angular.module('components', [])

require('./hello')(ngMod)
require('./about')(ngMod)
require('./sidebar')(ngMod)
require('./myButton')(ngMod)

export default ngMod.name