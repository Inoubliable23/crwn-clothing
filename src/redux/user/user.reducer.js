import userActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: null
}

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {

		case userActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
				error: null
			};
		case userActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null
			};
		case userActionTypes.SIGN_IN_FAILURE:
		case userActionTypes.SIGN_UP_FAILURE:
		case userActionTypes.SIGN_OUT_FAILURE:
			return {
				...state,
				error: payload
			};

		default:
			return state;

	}
}

export default userReducer;