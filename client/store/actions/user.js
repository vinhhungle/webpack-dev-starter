export const SET_USER = 'SET_USER'
export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID'
export const FETCH_USER_BY_ID_PENDING = 'FETCH_USER_BY_ID_PENDING'
export const FETCH_USER_BY_ID_FULFILLED = 'FETCH_USER_BY_ID_FULFILLED'

const usersCollection = require('../json/users.json')

const fetchUserByIdAsync = (id) => new Promise((resolve, reject) => {

  console.log('fetchUserByIdAsync', id)

  let user = usersCollection.find((item) => item.id === id)

  if (user) {
    setTimeout(() => resolve(user), 50)

  } else {
    reject(new Error('User not found'))
  }
})

export function fetchUserById (id) {
  return {
    type: FETCH_USER_BY_ID,
    payload: {
      promise: fetchUserByIdAsync(id)
    }
  }
}

export function setUser (payload) {
  return {
    type: SET_USER,
    payload: payload
  }
}
