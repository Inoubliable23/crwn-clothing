import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemContainer, ImageContainer, Content, Title, Subtitle } from './menu-item.styles';

const MenuItem = ({ history, match, title, imageUrl, size, linkUrl }) => {
	return (
		<MenuItemContainer
			size={size}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<ImageContainer imageUrl={imageUrl} />
			<Content>
				<Title>{title.toUpperCase()}</Title>
				<Subtitle>SHOP NOW</Subtitle>
			</Content>
		</MenuItemContainer>
	)
}

export default withRouter(MenuItem);
