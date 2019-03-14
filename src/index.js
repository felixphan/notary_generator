import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import docType from './reducers/DocType';
import firstName from './reducers/FirstName';
import lastName from './reducers/LastName';
import MainApp from './MainApp';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import labelStrings from './localization/index';

const rootReducer = combineReducers(
	{
		docType,
		firstName,
		lastName,
		i18n: i18nReducer
	});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
	composeEnhancer(applyMiddleware(thunk)));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(labelStrings));
store.dispatch(setLocale('jp'));

const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
		fontFamily: '"Times New Roman',
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