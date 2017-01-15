import * as types from '../actions/users'

let initialState = {
  isFetching: false,
  collection: []
}

export default function (state = initialState, action) {
  if (action.type === types.FETCH_USERS_PENDING) {
    return {...state, isFetching: true}
  }

  if (action.type === types.FETCH_USERS_FULFILLED) {
    return {...state, isFetching: false, collection: action.payload}
  }

  return state
}
