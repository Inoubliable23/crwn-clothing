import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: ''
	});
	
	const { email, password } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		emailSignInStart({
			email,
			password
		});
	}
	
	const handleChange = event => {
		const { name, value } = event.target;

		setCredentials({
			...userCredentials,
			[name]: value
		});
	}

	return (
		<SignInContainer>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					label="Email"
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="password"
					label="Password"
					value={password}
					handleChange={handleChange}
					required
				/>
				<ButtonsContainer>
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	)
}

const mapDispatchToProps = {
	googleSignInStart,
	emailSignInStart
};

export default connect(null, mapDispatchToProps)(SignIn);