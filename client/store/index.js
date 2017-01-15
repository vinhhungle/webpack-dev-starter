import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reduxPromise from 'redux-promise-middleware'

import rootReducer from './reducers'

export default (app) => {
  let initialState = window.__PROPS__ || {}

  const reduxLogger = createLogger({
    level: 'info',
    collapsed: true
  })

  const middlewares = [
    reduxThunk,
    reduxLogger,
    reduxPromise(),
    'ngUiRouterMiddleware',
  ]

  const reduxDevTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f

  app.config(($ngReduxProvider) => {
    'ngInject'
    const enhancers = [reduxDevTools]
    $ngReduxProvider.createStoreWith(rootReducer, middlewares, enhancers, initialState)
  })
}
