import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const Translate = require('react-redux-i18n').Translate;

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
});

const ContactInfoPaper = ({classes, firstName, lastName}) => {
	return (
		<div className={classes.root}>
			<Paper className={classes.paper} elevation={1}>
				<Grid container spacing={16}>
					<Grid item xs={2}>
						<Typography>
							<Translate value="firstName"/>
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography>
							{firstName}
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography>
							<Translate value="lastName"/>
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography>
							{lastName}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

ContactInfoPaper.propTypes = {
	classes: PropTypes.object.isRequired,
	firstName: PropTypes.string,
	lastName: PropTypes.string
};

export default withStyles(styles)(ContactInfoPaper);