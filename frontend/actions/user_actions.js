import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'
export const CLEAR_USERS_SEARCH = 'CLEAR_USERS_SEARCH'

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

export const fetchSearch = users => {
  return ({
    type: RECEIVE_SEARCH_RESULTS,
    users
  })
}

export const clearUsersSearch = () => {
  return ({
    type: CLEAR_USERS_SEARCH,
  })
}

export const getUsers = () => dispatch => (
  UserApiUtil.getUsers().then(users => dispatch(fetchUsers(users)))
)

export const getUser = username => dispatch => (
  UserApiUtil.getUser(username).then(user => dispatch(fetchUser(user)))
)

export const editUser = user => dispatch => (
  UserApiUtil.editUser(user).then(user => dispatch(fetchUser(user)))
)

export const searchUsers = query => dispatch => (
  UserApiUtil.searchUsers(query).then(users => dispatch(fetchSearch(users)))
)

export const clearSearch = () => dispatch => (
  dispatch(clearUsersSearch())
)
