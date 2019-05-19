import {
	FETCH_USER,
	FETCH_USER_FULFILLED,
	FETCH_USER_REJECTED
} from "../store/actions/actions_types";

import axios from "axios";

import {call, put, takeLatest} from 'redux-saga/effects';

function* fetchUserData (action) {
	const config = {
		timeout: 3000
	};
	const URL = `https://localhost:3000/subscriber/${action.payload}`;
	try {
		const userData = yield call(axios.get, URL, config);
		yield put ({
			type: FETCH_USER_FULFILLED,
			payload: userData
		})
	} catch (e) {
		yield put ({
			type: FETCH_USER_REJECTED,
			payload: e.message
		})
	}
}

export default function* watchFetchUserData() {
	yield takeLatest (FETCH_USER, fetchUserData)
}