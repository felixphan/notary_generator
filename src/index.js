import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import docType from './reducers/DocType';
import firstName from './reducers/FirstName';
import MainApp from './MainApp';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({docType,firstName});

const store = createStore(rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
	},
});

render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<MainApp />
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('root')
);