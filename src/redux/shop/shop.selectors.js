import { createSelector } from 'reselect';

export const selectCollections = state => state.shop.collections;

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => (
	createSelector(
		[selectCollections],
		collections => collections ? collections[collectionUrlParam] : null
	)
);

export const selectIsCollectionFetching = state => state.shop.isFetching;

export const selectAreCollectionsLoaded = state => !!state.shop.collections;