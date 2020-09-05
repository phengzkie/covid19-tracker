import { GET_COUNTRY_RESULTS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRY_RESULTS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
  }
};
