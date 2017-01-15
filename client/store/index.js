import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from './reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true
})

export default (app) => {
  app.config(($ngReduxProvider) => {
    'ngInject'
    $ngReduxProvider.createStoreWith(rootReducer, ['ngUiRouterMiddleware', logger, thunk])
  })
}