import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import watchFetchUserData from "./sagas/getUserDataSaga";

import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';

import reducers from "./store/reducers";

import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchUserData);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


serviceWorker.unregister();
