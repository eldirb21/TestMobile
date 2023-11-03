import * as _ from '../../utils/actionTypes';

const initialState = {
  loading: false,
  Items: [],
  messages: null,
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
      return {...state, loading: actions.loading, messages: actions.payload};
    default:
      return state;
  }
};

export default homeReducer;
