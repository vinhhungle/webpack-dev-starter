import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import reduxPromise from 'redux-promise-middleware'

import * as reducers from './reducers'
import getInitialState from './state'

export function initStore (history) {
  let initialState = window.__PROPS__ || {}

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })

  const reduxDevTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f

  const middlewares = compose(
    applyMiddleware(
      reduxThunk,
      reduxLogger(),
      reduxPromise(),
      routerMiddleware(history)
    ),
    reduxDevTools
  )

  let store = createStore(
    reducer,
    initialState,
    middlewares
  )

  syncHistoryWithStore(history, store)

  return store
}
