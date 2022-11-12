import * as types from "./acttionTypes"


const initialState={
    products:[],
    Gridproducts:[],
    product:{},
<<<<<<< HEAD
<<<<<<< HEAD
    loading:false,
    cart:[],
    searchProd:[],
    searchQuery:""
=======
    loading:true
>>>>>>> 7960daf (productpage adde)
=======
    loading:true,
    cart:[]
>>>>>>> 35f801b (singlepage)
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
        
>>>>>>> 7960daf (productpage adde)
        default:
            return state
    }
   
}
export  {reducers};