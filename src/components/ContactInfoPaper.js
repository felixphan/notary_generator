import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

const ContactInfoPaper = ({classes, firstName}) => {
	return (
		<div className={classes.root}>
			<Paper className={classes.paper} elevation={1}>
				<Grid container spacing={16}>
					<Grid item xs={4}>
						<Typography>
							First Name
						</Typography></Grid>
					<Grid item xs={8}>
						<Typography>
							{firstName}
						</Typography></Grid>
				</Grid>

			</Paper>
		</div>
	);
};

ContactInfoPaper.propTypes = {
	classes: PropTypes.object.isRequired,
	firstName: PropTypes.string,
};

export default withStyles(styles)(ContactInfoPaper);