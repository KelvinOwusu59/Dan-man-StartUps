<<<<<<< HEAD
<<<<<<< HEAD

import { combineReducers } from "redux";
import { reducers as AppReducer } from "./App/reducer";
import { reducer as CartReducer } from "./Addtocart/reducer";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2173f42 (WishList Added)
import {reducer as WishlistReducer} from "./wishlist/reducer"
import { AuthReducer } from "./Auth/reducer";

// import {reducer as CartReducer} from "../Cartreducer/reducer"

const rootreducer = combineReducers({
  AppReducer,
  CartReducer,
  AuthReducer,
  WishlistReducer
<<<<<<< HEAD
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
=======
import { AuthReducer } from "./Auth/reducer";

>>>>>>> dcab2db (Cart page Added)
// import {reducer as CartReducer} from "../Cartreducer/reducer"

const rootreducer = combineReducers({
  AppReducer,
  CartReducer,
  AuthReducer
=======
>>>>>>> 2173f42 (WishList Added)
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
