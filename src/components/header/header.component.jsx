import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { OptionLink, OptionsContainer, HeaderContainer, LogoContainer } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">
					SHOP
				</OptionLink>
				<OptionLink to="/contact">
					CONTACT
				</OptionLink>
				{
					currentUser ?
					<OptionLink as="div" onClick={signOutStart}>
						SIGN OUT
					</OptionLink>
					:
					<OptionLink to="/signin">
						SIGN IN
					</OptionLink>
				}
				<CartIcon />
			</OptionsContainer>
			{
				hidden ? null :
				<CartDropdown />
			}
		</HeaderContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

const mapDispatchToProps = {
	signOutStart
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);