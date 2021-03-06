import { cart_actions } from "./cart.actions.Constants";

export const toggleCartHiddenAction=()=>({
   type :cart_actions.TOGGLE_CART_HIDDEN
})

export const addItemAction=(item)=>({
  type :cart_actions.ADD_ITEM,
  payload:item
})

export const deleteItemAction = (item) => ({
  type: cart_actions.DELETE_ITEM,
  payload: item,
});

export const decreaseItemQuantityAction=(item)=>({
  type:cart_actions.DECREASE_ITEM_QUANTITY,
  payload :item
})

export const clearCart =()=>({
  type: cart_actions.CLEAR_CART_ITEAMS
})