import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FirstNameInput from '../containers/FirstNameInput.container';
import Grid from '@material-ui/core/Grid';
import LastNameInput from '../containers/LastNameInput.container';
import DocTypeSelectBoxContainer from '../containers/DocTypeSelectBox.container';

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
				<Grid item xs={2}><DocTypeSelectBoxContainer/></Grid>
				<Grid item xs={4}><FirstNameInput/></Grid>
				<Grid item xs={6}><LastNameInput/></Grid>
			</Grid>
		</div>
	);
};

ContactInfoInput.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactInfoInput);