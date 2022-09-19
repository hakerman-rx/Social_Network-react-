import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/user_red";

const reducers = combineReducers({
    users: userReducer
})

const store = createStore(reducers)

export default store