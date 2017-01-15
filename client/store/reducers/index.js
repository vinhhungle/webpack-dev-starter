import {combineReducers} from 'redux'
import {router} from 'redux-ui-router'

import title from './title'
import users from './users'
import user from './user'

const rootReducer = combineReducers({
  router,
  title,
  users,
  user
})

export default rootReducer