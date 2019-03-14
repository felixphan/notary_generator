import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ContactInfoPaper from './containers/ContactInfoPaper.container';
import ContactInfoInput from './components/ContactInfoInput';
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
const MainApp = ({classes}) => {
	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={6}><ContactInfoInput/></Grid>
				<Grid item xs={6}>
					<ContactInfoPaper/>
				</Grid>
			</Grid>
		</div>
	);
};

MainApp.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainApp);