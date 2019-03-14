import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
	fab: {
		margin: theme.spacing.unit,
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
});

const DocTypeBtn = ({classes, text, handleClick}) => {
	return (
		<div>
			<Fab color="primary" aria-label="Add" className={classes.fab}  onClick={handleClick}>
				<AddIcon />
			</Fab>
			<p>{text}</p>
		</div>
	);
};

DocTypeBtn.propTypes = {
	classes: PropTypes.object.isRequired,
	text: PropTypes.string,
	handleClick: PropTypes.func
};

export default withStyles(styles)(DocTypeBtn);