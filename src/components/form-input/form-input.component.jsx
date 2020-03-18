import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
	return (
		<div className="group">
			<input
				className="form-input"
				value={value}
				onChange={handleChange}
				{...otherProps}
			/>
			{value}
			{
				label ?
				<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
					{label}
				</label>
				: null
			}
		</div>
	)
}

export default FormInput;