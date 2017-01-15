export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING'
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED'

const usersCollection = require('../json/users.json')

const fetchUsersAsync = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(usersCollection), 100)
})

export function fetchUsers () {
  return {
    type: FETCH_USERS,
    payload: {
      promise: fetchUsersAsync()
    }
  }
}