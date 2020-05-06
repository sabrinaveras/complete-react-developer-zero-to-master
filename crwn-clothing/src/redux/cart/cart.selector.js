import { createSelector } from "reselect";

const selectCart = state => state.cart;


export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce(
	(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
))

export const selectCartTotal = createSelector([selectCartItems], cartItems => cartItems.reduce(
	(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0
))



/*
*   We have to switch up our folder structure a little bit because we are going to move the code that we normally write
*   inside of the respective redux.
*
*   That this will be related to. So for example this car item count might be a reusable selector in the sense that we
*   might want an item count in multiple places of our application and error for us to do that. WE would add it into a new
*   file called cart.selector.js
*
*
*
*
* */