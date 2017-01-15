import rootReducer from './reducers'

export default (app) => {
  app.config(($ngReduxProvider) => {
    'ngInject'
    $ngReduxProvider.createStoreWith(rootReducer, ['ngUiRouterMiddleware'])
  })
}