<<<<<<< HEAD
<<<<<<< HEAD

import { combineReducers } from "redux";
import { reducers as AppReducer } from "./App/reducer";
import { reducer as CartReducer } from "./Addtocart/reducer";
import {reducer as WishlistReducer} from "./wishlist/reducer"
import { AuthReducer } from "./Auth/reducer";

// import {reducer as CartReducer} from "../Cartreducer/reducer"

const rootreducer = combineReducers({
  AppReducer,
  CartReducer,
  AuthReducer,
  WishlistReducer
  // CartReducer,
});

export default rootreducer;

=======
import {combineReducers} from "redux"
import {reducers as AppReducer} from "./App/reducer"
<<<<<<< HEAD
=======
import { combineReducers } from "redux";
import { reducers as AppReducer } from "./App/reducer";
import { reducer as CartReducer } from "./Addtocart/reducer";
>>>>>>> 7de8bd9 (addtocart)
// import {reducer as AuthReducer} from "../Auth/reducer";
// import {reducer as CartReducer} from "../Cartreducer/reducer"

const rootreducer = combineReducers({
  AppReducer,
  CartReducer,
  // AuthReducer
  // CartReducer,
});

<<<<<<< HEAD
=======
import { AuthReducer } from "./Auth/reducer";
// import {reducer as CartReducer} from "../Cartreducer/reducer"

const rootreducer=combineReducers({
    AppReducer,
    AuthReducer
    // CartReducer,
>>>>>>> 3bc0099 (added)
})

export default rootreducer;
>>>>>>> 7960daf (productpage adde)
=======
export default rootreducer;
>>>>>>> 7de8bd9 (addtocart)
