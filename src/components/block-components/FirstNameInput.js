import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	}
});

const FirstNameInput = ({classes, handleChange}) => {
	return (
		<div>
			<TextField label='First Name' className = {classes.textField} onChange={handleChange} margin="normal">
			</TextField>
		</div>
	);
};

FirstNameInput.propTypes = {
	classes: PropTypes.object.isRequired,
	handleChange: PropTypes.func
};

export default withStyles(styles)(FirstNameInput);