import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './login';

const initialState = { loading: false, userInfo: null, error: null };

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null, // Reset error on new request
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default loginReducer;