import styled from 'styled-components';

export const SignInContainer = styled.div`
	width: 380px;
	
	@media screen and (max-width: 800px) {
		width: 100%;
		padding: 0 15px;
		margin-bottom: 60px;
	}
`

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	
	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`