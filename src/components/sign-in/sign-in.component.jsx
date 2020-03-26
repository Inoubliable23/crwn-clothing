import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';

class SignIn extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			email: '',
			password: ''
		}
	}
	
	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({
				email: '',
				password: ''
			});

			this.props.history.push('/shop');

		} catch (error) {
			console.error(error);

			alert(error.message);
		}
	}
	
	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		const { email, password } = this.state;
		return (
			<SignInContainer>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						label="Email"
						value={email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						label="Password"
						value={password}
						handleChange={this.handleChange}
						required
					/>
					<ButtonsContainer>
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		)
	}
}

export default withRouter(SignIn);