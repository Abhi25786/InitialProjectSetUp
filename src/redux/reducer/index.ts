import { combineReducers } from "redux";
import authReducer from "./authReducer";
import mailReducer from "./mailReducer";

const appReducer = combineReducers({
     auth : authReducer,
     main : mailReducer,
     
})
export default appReducer;