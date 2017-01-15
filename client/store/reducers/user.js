import * as types from '../actions/user'

let initialState = {
  isFetching: false,
  data: []
}

export default function (state = initialState, action) {
  if (action.type === types.SET_USER) {
    return {...state, isFetching: false, data: action.payload}
  }

  if (action.type === types.FETCH_USER_BY_ID_PENDING) {
    return {...state, isFetching: true}
  }

  if (action.type === types.FETCH_USER_BY_ID_FULFILLED) {
    return {...state, isFetching: false, data: action.payload}
  }

  return state
}
