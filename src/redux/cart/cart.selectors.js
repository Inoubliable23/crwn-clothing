import { createSelector } from "reselect";

export const selectCartItems = state => state.cart.cartItems;

export const selectCartHidden = state => state.cart.hidden;

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => (
		cartItems.reduce(
			(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
			0
		)
	)
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems => (
		cartItems.reduce(
			(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.price * cartItem.quantity,
			0
		)
	)
);