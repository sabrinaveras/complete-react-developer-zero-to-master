import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
	
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item =>({
	
	type: CartActionTypes.ADD_ITEM,
	payload: item
});

export const clearItemFromCart = item =>({
	type: CartActionTypes.CLEAN_ITEM_FROM_CART,
	payload: item
});