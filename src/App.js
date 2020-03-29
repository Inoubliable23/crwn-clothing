import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends Component {

	unsubsribeFromAuth = null;
	unsubsribeFromSnapshot = null;
	
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				this.unsubsribeFromSnapshot = userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else {
				setCurrentUser(null);
			}
		});
	}

	componentWillUnmount() {
		this.unsubsribeFromAuth && this.unsubsribeFromAuth();
		this.unsubsribeFromSnapshot && this.unsubsribeFromSnapshot();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						path='/signin'
						render={() => (
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUpPage />
							)
						)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
