import React from 'react';
import { Name, CartItemContainer, ItemDetails, Img, Price } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
	return (
		<CartItemContainer>
			<Img src={imageUrl} alt="item" />
			<ItemDetails>
				<Name>{name}</Name>
				<Price>{quantity} x ${price}</Price>
			</ItemDetails>
		</CartItemContainer>
	);
}

export default CartItem;