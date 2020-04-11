import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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

		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart({
			email,
			password
		});
	}
	
	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		const { googleSignInStart } = this.props;
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
						<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		)
	}
}

const mapDispatchToProps = {
	googleSignInStart,
	emailSignInStart
};

export default connect(null, mapDispatchToProps)(SignIn);