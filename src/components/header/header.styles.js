import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
  width: 100%;
  display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
	
	@media screen and (max-width: 800px) {
		height: 50px;
		margin-bottom: 15px;
	}
`

export const LogoContainer = styled(Link)`
	padding: 25px;
	
	@media screen and (max-width: 800px) {
		padding: 15px;
	}
`

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	
	@media screen and (max-width: 800px) {
		width: 80%;
	}
`

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`