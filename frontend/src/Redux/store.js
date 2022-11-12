<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 020c3b9 (pulling)
import { legacy_createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootreducer from "./rootReducer";
<<<<<<< HEAD
<<<<<<< HEAD

const middleware = [thunk]

const store = legacy_createStore(rootreducer, applyMiddleware(...middleware));
export default store;
=======
=======
import { legacy_createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";

import rootreducer from "./rootReducer";
>>>>>>> dd34221 (Mens Page added)
const middleware= [thunk]
const store = legacy_createStore(rootreducer, applyMiddleware(...middleware));

export default store;
<<<<<<< HEAD
>>>>>>> 7960daf (productpage adde)
=======
=======


>>>>>>> ea90062 (productpage added)
import { legacy_createStore,applyMiddleware,combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './Auth/reducer'

const rootRuducer = combineReducers({AuthReducer})

export const store = legacy_createStore(rootRuducer,composeEnhancers(applyMiddleware(thunk)));

=======
const middleware = [thunk];
const store = legacy_createStore(rootreducer, applyMiddleware(...middleware));
=======
>>>>>>> dd34221 (Mens Page added)

export default store;

// import { legacy_createStore,applyMiddleware,combineReducers, compose } from 'redux'
// import thunk from 'redux-thunk'
// import { AuthReducer } from './Auth/reducer'
>>>>>>> 020c3b9 (pulling)

// const rootRuducer = combineReducers({AuthReducer})
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

<<<<<<< HEAD
>>>>>>> c67e613 (add authreducr function)
=======
// export const store = legacy_createStore(rootRuducer,composeEnhancers(applyMiddleware(thunk)));
>>>>>>> 020c3b9 (pulling)
