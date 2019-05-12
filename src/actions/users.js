import axios from 'axios'

const api = 'https://idontknow.com'

export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const EDIT_USER = 'EDIT_USER'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAIL = 'USER_FAIL'

export const get_user = id => dispatch => {
    dispatch({type: GET_USER})
    return axios
        .get(`${api}/${id}`)
        .then(res => dispatch({type: USER_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: USER_FAIL, payload: err}))
}