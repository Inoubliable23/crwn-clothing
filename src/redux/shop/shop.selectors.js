import { createSelector } from 'reselect';

export const selectCollections = state => state.shop.collections;

export const selectCollectionsForPreview = state => {
	const collections = selectCollections(state);
	return collections ?
		Object.keys(collections).map(key => collections[key])
		:
		[];
};

export const selectCollection = collectionUrlParam => (
	createSelector(
		[selectCollections],
		collections => collections ? collections[collectionUrlParam] : null
	)
);