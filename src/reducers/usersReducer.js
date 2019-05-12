import {} from '../actions/users'

const initState = {
    users: [],
    fetching: false,
    error: null,
}

export const usersReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return state
    }
}