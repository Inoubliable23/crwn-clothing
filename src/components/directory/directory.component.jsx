import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenu } from './directory.styles';

const Directory = ({ sections }) => {
	return (
		<DirectoryMenu>
			{
				sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))
			}
		</DirectoryMenu>
	);
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);