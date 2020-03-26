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
`

export const Price = styled.div`
	width: 10%;
`