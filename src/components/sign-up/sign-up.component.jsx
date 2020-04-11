import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title, SignUpContainer } from './sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

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

		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;

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

const mapDispatchToProps = {
	signUpStart: signUpStart
};

export default connect(null, mapDispatchToProps)(SignUp);