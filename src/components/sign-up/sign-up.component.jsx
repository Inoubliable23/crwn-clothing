import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Title, SignUpContainer } from './sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {

	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();


		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		signUpStart({
			displayName,
			email,
			password
		});
	}
	
	const handleChange = event => {
		const { name, value } = event.target;

		setUserCredentials({
			...userCredentials,
			[name]: value
		});
	}
	
	return (
		<SignUpContainer>
			<Title>I do not have an account</Title>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					label="Display Name"
					value={displayName}
					handleChange={handleChange}
					required
				/>
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
				<FormInput
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					value={confirmPassword}
					handleChange={handleChange}
					required
				/>
				<div>
					<CustomButton type="submit">Sign up</CustomButton>
				</div>
			</form>
		</SignUpContainer>
	)
}

const mapDispatchToProps = {
	signUpStart: signUpStart
};

export default connect(null, mapDispatchToProps)(SignUp);