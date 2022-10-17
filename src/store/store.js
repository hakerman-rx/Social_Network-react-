import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/user_red";
import profileReducer from "./reducers/profile_red";

const reducers = combineReducers({
    users: userReducer,
    profile: profileReducer
})

const store = createStore(reducers)

export default store