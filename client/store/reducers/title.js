import { UPDATE_TITLE } from '../actions/title'

export default function (state = '', action) {
  if (action.type === UPDATE_TITLE) {
    return action.payload
  }
  return state
}
