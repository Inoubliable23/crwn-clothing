import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

	@media screen and (max-width: 800px) {
		margin-bottom: 20px;
	}
`

export const Title = styled.h1`
  font-size: 28px;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		text-align: center;
		margin-bottom: 15px;
	}
`

export const Preview = styled.div`
  display: flex;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		flex-wrap: wrap;
	}
`