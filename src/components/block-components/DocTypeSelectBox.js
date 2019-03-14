import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	  },
	formControl: {
	  margin: theme.spacing.unit,
	  minWidth: 120,
	}
});

const DocTypeSelectBox = ({classes, handleChange, docType}) => {
	return (
		<div className={classes.root}>
			<FormControl variant="outlined" className={classes.formControl}>
				<Select
					value={docType}
					onChange={handleChange}
					input={
						<OutlinedInput
							labelWidth={0}
							name="Language"
							id="outlined-age-simple"
						/>
					}
				>
					<MenuItem value={'en'}>English</MenuItem>
					<MenuItem value={'jp'}>Japanese</MenuItem>
					<MenuItem value={'vi'}>Vietnamese</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

DocTypeSelectBox.propTypes = {
	classes: PropTypes.object.isRequired,
	handleChange: PropTypes.func,
	docType: PropTypes.string,
};

export default withStyles(styles)(DocTypeSelectBox);