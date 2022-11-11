<<<<<<< HEAD
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
=======
import { legacy_createStore,applyMiddleware,combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './Auth/reducer'

const rootRuducer = combineReducers({AuthReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootRuducer,composeEnhancers(applyMiddleware(thunk)));



>>>>>>> c67e613 (add authreducr function)
