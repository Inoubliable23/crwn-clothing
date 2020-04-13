import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const ImageContainer = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: url(${({ imageUrl }) => imageUrl});
`

export const AddButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;

	@media screen and (max-width: 800px) {
		display: block;
		top: 200px;
	}
`

export const CollectionItemContainer = styled.div`
  width: 22VW;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

	&:hover {
		${ImageContainer} {
			opacity: 0.8;
		}

		${AddButton} {
			opacity: 0.85;
			display: block;
		}
	}

	@media screen and (max-width: 800px) {
  	width: 45VW;
  	height: 290px;
	}
`

export const CollectionFooter = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	margin-bottom: 15px;
`

export const Name = styled.div`
	width: 90%;

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`

export const Price = styled.div`
	width: 10%;

	@media screen and (max-width: 800px) {
		width: 20%;
	}
`