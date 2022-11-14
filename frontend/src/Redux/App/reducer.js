import * as types from "./acttionTypes"


const initialState={
    products:[],
    Gridproducts:[],
    product:{},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6421fbc (Media query)
    loading:false,
    cart:[],
    searchProd:[],
    searchQuery:""
=======
    loading:true
>>>>>>> 7960daf (productpage adde)
=======
    loading:true,
<<<<<<< HEAD
    cart:[]
>>>>>>> 35f801b (singlepage)
=======
    cart:[],
    searchProd:[],
    searchQuery:""
>>>>>>> acfe1b7 (Search Functionality)
}


const reducers=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_PRODUCT:
            
            return{
                ...state,
                products:action.payload,
                loading:false
            }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 35f801b (singlepage)
        case types.CART:
            return {
                ...state,
                cart:action.payload,
            }
<<<<<<< HEAD
<<<<<<< HEAD
            case types.SEARCH_ITEM:
            return {
                ...state,
                searchProd:action.payload.data,searchQuery:action.payload.query,loading:false
            }
            case types.REQUEST_PRODUCT:
                return {
                    ...state,
                   loading:true,
                }
            
=======
           
=======
>>>>>>> 35f801b (singlepage)
=======
            case types.SEARCH_ITEM:
            return {
                ...state,
                searchProd:action.payload.data,searchQuery:action.payload.query,loading:false
            }
<<<<<<< HEAD
>>>>>>> acfe1b7 (Search Functionality)
        
>>>>>>> 7960daf (productpage adde)
=======
            case types.REQUEST_PRODUCT:
                return {
                    ...state,
                   loading:true,
                }
            
>>>>>>> 6421fbc (Media query)
        default:
            return state
    }
   
}
export  {reducers};