import {
	FETCH_USER,
	FETCH_USER_REJECTED,
	FETCH_USER_FULFILLED,
	SET_FOCUS,
	COPY,
	CHANGE_USER_NEW_DATA,
	RESET_ATTENTION_COMMENTS
} from "../actions/actions_types";

const userInitialState = {
	//userData: null,
	userData: {
		"surname": "Петров",
		"documentType": "Паспорт",
		"country": "Российская Федерация",
		"dateOfGetDocument": "01.01.1991",
		"documentNumber": "5896-537700",
		"unitCode": 6548432,
		"issuingAuthority": "УФМС в городе Ижевск",
		"registrationAddress": "г. Ижевск ул. Ленина 5/6"
	},
	userNewData: {
		"surname": "",
		"documentType": "",
		"country": "",
		"dateOfGetDocument": null,
		"documentNumber": "",
		"unitCode": "",
		"issuingAuthority": "",
		"registrationAddress": ""
	},
	focus: null,
	fetching: false,
	error: null,
	attention: false
};

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return {...state, fetching: true};

		case FETCH_USER_REJECTED:
			return {...state, fetching: false, error: action.payload};

		case FETCH_USER_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				userData: action.payload,
			};


		case SET_FOCUS:
			return {
				...state,
				focus: action.payload
			};


		case COPY:
			const userNewDataCopy = {...state.userNewData};
			userNewDataCopy[action.payload] = state.userData[action.payload];

			return {
				...state,
				userNewData: userNewDataCopy
			};


		case CHANGE_USER_NEW_DATA:
			const userNewDataChange = {...state.userNewData};
			userNewDataChange[action.payload.path] = action.payload.newData;

			return {
				...state,
				userNewData: userNewDataChange
			};


		case RESET_ATTENTION_COMMENTS:
			return {...state, attention: action.payload};


		default:
			return state;
	}
};

export default userReducer;