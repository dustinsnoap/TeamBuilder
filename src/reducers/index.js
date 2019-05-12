import {combineReducers} from 'redux'

import {usersReducer as users} from './usersReducer'

export default combineReducers({
    users,
})