import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import App from "./App";

// eslint-disable-next-line no-unused-vars
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  /*
  with provider, all your apps has access to the store
  */
  <Provider store={store} loading={null}>
    <App />
  </Provider>,

  document.getElementById("root")
);

//this is example (boiler plate you can say)
/*

import { createStore } from "redux";

const increment = () => {
  return {
    //can be name or type
    type: "INCREMENT",
  };
};

// eslint-disable-next-line no-unused-vars
const decrement = () => {
  return {
    //can be name or type
    type: "DECREMENT",
  };
};

const counter = (state = 0, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

//Display in the console
//you don't have to do this
store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement())


*/

//STORE -> Globalized State
/*

the store holds all the data for the application
like on big state that you can use anywhere

*/

//ACTION (IN THIS CASE WE WANT IT INCREMENT) (it just a function that return an object)
/*

describes what you gonna do
just give it a name

*/

//REDUCER (it just a function that return an object)
/*

describes how your action transform the state into the next state
the reducer is gonna check which action you did and based on the action, 
it is going to modify the store

*/

//DISPATCH
/*

where we can execute that action
like telling to dispatch an action to the reducer
the reducer is going to check what to do and the store gets updated

*/
