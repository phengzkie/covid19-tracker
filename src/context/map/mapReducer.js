import { GET_ALL_COUNTRY_RESULTS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRY_RESULTS:
      return {
        ...state,
        data: action.payload
      };
  }
};
