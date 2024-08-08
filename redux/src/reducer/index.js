import { counterReducer } from "./counter"
import { authReducer } from "./auth"
import { combineReducers } from "redux"

export const allReducer = combineReducers({
    counter : counterReducer,
    islogged : authReducer
})