import { cart_actions } from "./cart.actions.Constants";
import { addItemToCart, decreaseItemQuantity, deleteItemFromCart } from "./cart.utils";

const initial_State ={
    hidden:true,
    cartItems: []
}

export const cartReducer=(state=initial_State,action)=>{
   switch (action.type) {
       case cart_actions.TOGGLE_CART_HIDDEN :
           return {
               ...state,
               hidden :!state.hidden
           };
        case cart_actions.ADD_ITEM :
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems,action.payload)
            }   

        case cart_actions.DELETE_ITEM : 
        return {
            ...state,
             cartItems : deleteItemFromCart(state.cartItems,action.payload)
        }
        case cart_actions.DECREASE_ITEM_QUANTITY :
            return {
                ...state,
                cartItems :decreaseItemQuantity(state.cartItems,action.payload)
            }
        case cart_actions.CLEAR_CART_ITEAMS :
            return {
                ...state,
                cartItems:[]
            }
            
       default:
          return state
   }
}