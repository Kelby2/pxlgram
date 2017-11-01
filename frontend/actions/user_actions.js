import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const CLEAR_USERS = 'CLEAR_USERS'

export const fetchUsers = users => {
  return ({
    type: RECEIVE_ALL_USERS,
    users
  })
}

export const fetchUser = user => {
  return ({
    type: RECEIVE_USER,
    user
  })
}

export const clearAllUsers = () => {
  return ({
    type: CLEAR_USERS,
    user: {}
  })
}

export const clearUsers = () => dispatch => (
  dispatch(clearAllUsers())
)

export const getUsers = () => dispatch => (
  UserApiUtil.getUsers().then(users => dispatch(fetchUsers(users)))
)

export const getUser = (id) => dispatch => (
  UserApiUtil.getUser(id).then(user => dispatch(fetchUser(user)))
)

export const editUser = (user) => dispatch => (
  UserApiUtil.editUser(user).then(user => dispatch(fetchUser(user)))
)
