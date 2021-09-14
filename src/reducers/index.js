import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from "redux"


/*
combining all the reducers
*/
 const allReducers = combineReducers({
    counter:counterReducer,
    isLogged: loggedReducer
});

export default allReducers





