import title from './title'
import {combineReducers} from 'redux'
import {router} from 'redux-ui-router'

const rootReducer = combineReducers({
  router,
  title
})

export default rootReducer