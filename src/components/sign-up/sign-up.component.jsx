import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { Title, SignUpContainer } from './sign-up.styles';

class SignUp extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, {
				displayName: displayName
			});

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});

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
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<Title>I do not have an account</Title>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						label="Display Name"
						value={displayName}
						handleChange={this.handleChange}
						required
					/>
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
					<FormInput
						type="password"
						name="confirmPassword"
						label="Confirm Password"
						value={confirmPassword}
						handleChange={this.handleChange}
						required
					/>
					<div>
						<CustomButton type="submit">Sign up</CustomButton>
					</div>
				</form>
			</SignUpContainer>
		)
	}
}

export default SignUp;