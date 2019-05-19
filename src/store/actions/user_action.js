import {
	FETCH_USER,
	SET_FOCUS,
	COPY,
	CHANGE_USER_NEW_DATA,
	RESET_ATTENTION_COMMENTS
} from "./actions_types";

export function fetchUser (id) {
	return {
		type: FETCH_USER,
		payload: id
	}
}

export function setFocus (focus) {
	return {
		type: SET_FOCUS,
		payload: focus
	}
}

export function copy (focus) {
	return {
		type: COPY,
		payload: focus
	}
}

export function changeUserNewData (data) {
	return {
		type: CHANGE_USER_NEW_DATA,
		payload: data
	}
}

export function destroyConnect () {
	return {
		type: RESET_ATTENTION_COMMENTS,
		payload: true
	}
}

export function resetAttentionComment () {
	return {
		type: RESET_ATTENTION_COMMENTS,
		payload: false
	}
}