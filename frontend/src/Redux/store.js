import { legacy_createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootreducer from "./rootReducer";
<<<<<<< HEAD

const middleware = [thunk]

const store = legacy_createStore(rootreducer, applyMiddleware(...middleware));
export default store;
=======
const middleware= [thunk]
const store = legacy_createStore(rootreducer, applyMiddleware(...middleware));

export default store;
>>>>>>> 7960daf (productpage adde)
