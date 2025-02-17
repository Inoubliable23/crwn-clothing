import styled, { css } from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`

export const Img = styled.img`
	width: 100%;
	height: 100%;
`

const commonWidth = css`
	width: 23%;
`

export const Name = styled.span`
	${commonWidth}
`

export const Quantity = styled.span`
	${commonWidth}
	display: flex;
	
	@media screen and (max-width: 800px) {
		justify-content: center;
	}
`

export const Price = styled.span`
	${commonWidth}
	
	@media screen and (max-width: 800px) {
		text-align: center;
	}
`

export const Arrow = styled.div`
	cursor: pointer;
`

export const Value = styled.span`
	margin: 0 10px;
`

export const RemoveButton = styled.div`
	padding-left: 12px;
  cursor: pointer;
	
	@media screen and (max-width: 800px) {
		padding-left: 0;
	}
`