import * as _ from '../../utils/actionTypes';

const initialState = {
  loading: false,
  Items: [],
  messages: null,
  userAuth: null,
  status: null,
};

const homeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case _.GET_DATA_LOAD:
      return {...state, loading: true};
    case _.GET_DATA_SUCCESS:
      return {...state, loading: false, Items: actions.payload};
    case _.GET_DATA_FAILED:
      return {...state, loading: false};

    case _.LOGIN_USER:
      return {
        ...state,
        loading: actions.loading,
        status: actions.status,
        messages: actions.message,
        userAuth: actions.data,
      };
    default:
      return state;
  }
};

export default homeReducer;
