import { combineReducers } from 'redux'
import user from "./user/Reducer";

const RootReducer = combineReducers({
    user
})
export default RootReducer