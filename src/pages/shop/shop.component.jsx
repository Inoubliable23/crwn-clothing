import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends Component {

	componentDidMount() {
		this.props.fetchCollections();
	}

	render() {
		const { match } = this.props;
		return (
			<div>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchCollections: () => dispatch(fetchCollectionsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);