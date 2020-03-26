import { createSelector } from 'reselect';

export const selectCollections = state => state.shop.collections;

export const selectCollectionsForPreview = state => {
	return Object.keys(state.shop.collections)
		.map(key => state.shop.collections[key]);
};

export const selectCollection = collectionUrlParam => (
	createSelector(
		[selectCollections],
		collections => collections[collectionUrlParam]
	)
);