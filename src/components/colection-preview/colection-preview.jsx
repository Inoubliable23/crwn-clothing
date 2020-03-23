import React from 'react';
import './colection-preview.scss';
import CollectionItem from '../collection-item/collection-item.component';

const ColectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{
					items
						.filter((item, i) => i < 4)
						.map((item) => (
							<CollectionItem key={item.id} item={item} />
						))
				}
			</div>
		</div>
	)
}

export default ColectionPreview;