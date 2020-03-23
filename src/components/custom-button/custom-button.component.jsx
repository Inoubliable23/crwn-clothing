import React from 'react';
import classNames from 'classnames';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
	let buttonClass = classNames({
		'custom-button': true,
		'google-sign-in': isGoogleSignIn,
		'inverted': inverted
	});

	return (
		<button
			className={buttonClass}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default CustomButton;