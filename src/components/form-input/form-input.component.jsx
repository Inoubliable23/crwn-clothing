import React from 'react';
import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
	return (
		<GroupContainer>
			<FormInputContainer
				value={value}
				onChange={handleChange}
				{...otherProps}
			/>
			{
				label ?
				<FormInputLabel value={value}>
					{label}
				</FormInputLabel>
				: null
			}
		</GroupContainer>
	)
}

export default FormInput;