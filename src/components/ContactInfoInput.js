import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FirstNameInput from '../containers/FirstNameInput.container';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});
const ContactInfoInput = ({classes}) => {
	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={2}><FirstNameInput/></Grid>
			</Grid>
		</div>
	);
};

ContactInfoInput.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactInfoInput);