import { combineReducers } from "redux";

import cakeReducer from "./cakes/cakeReducer"

import icecreamReducer from "./iceCream/icecreamReducer";
import userReducer from  './user/userReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:icecreamReducer,
    user:userReducer
})

export default rootReducer

