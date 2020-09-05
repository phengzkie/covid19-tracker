import React, { useReducer } from 'react';

import CountryContext from './countryContext';
import CountryReducer from './countryReducer';
import { GET_COUNTRY_RESULTS, SET_LOADING } from '../types';

import axios from 'axios';

const CountryState = (props) => {
  const initialState = {
    data: {},
    loading: false
  };

  const [ state, dispatch ] = useReducer(CountryReducer, initialState);

  // Get Specific Country Results
  const getCountryResults = async () => {
    setLoading();

    const res = await axios.get('https://disease.sh/v3/covid-19/countries/ph');

    dispatch({
      type: GET_COUNTRY_RESULTS,
      payload: res.data
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CountryContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        getCountryResults
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
