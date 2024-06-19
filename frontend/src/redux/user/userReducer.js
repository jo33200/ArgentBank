const initialState = { loading: false, profile: null, error: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_PROFILE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'USER_PROFILE_SUCCESS':
      return { ...state, loading: false, profile: action.payload };
    case 'USER_PROFILE_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;