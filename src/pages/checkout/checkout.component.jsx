import React from 'react';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import { HeaderBlock, CheckoutHeader, CheckoutPageContainer, Total, TestWarning, StripeButtonContainer } from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<CheckoutPageContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{
				cartItems.map(cartItem => (
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				))
			}

			<Total>TOTAL: ${total}</Total>
			<TestWarning>
				*Please use the following test credit card for payments*
				<br/>
				4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
			</TestWarning>
			<StripeButtonContainer>
				<StripeButton price={total} />
			</StripeButtonContainer>
		</CheckoutPageContainer>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);