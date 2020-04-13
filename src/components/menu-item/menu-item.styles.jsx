import styled from 'styled-components';

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: url(${({ imageUrl }) => imageUrl});
`

export const Content = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: #fff;
	opacity: 0.8;
	position: absolute;
`

export const MenuItemContainer = styled.div`
	height: ${({ size }) => size ? '380px' : '240px'};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	&:hover {
		cursor: pointer;
	
		${ImageContainer} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
	
		${Content} {
			opacity: 0.9;
		}
	}

	@media screen and (max-width: 800px) {
		height: 240px;
	}
`

export const Title = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`

export const Subtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`