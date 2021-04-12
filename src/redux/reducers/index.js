import {combineReducers} from 'redux'
import {AuthReducer, ErrorReducer} from './AuthReducer'

export default combineReducers({
    auth: AuthReducer,
    error: ErrorReducer
})