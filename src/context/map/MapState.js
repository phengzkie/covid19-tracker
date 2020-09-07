import React, { useReducer } from 'react';

import mapContext from './mapContext';
import MapReducer from './mapReducer';
import { GET_ALL_COUNTRY_RESULTS } from '../types';

import axios from 'axios';

const MapState = (props) => {
  const initialState = {
    data: {}
  };

  const [ state, dispatch ] = useReducer(MapReducer, initialState);

  // Get All Countries Results
  const getAllCountriesResult = async () => {
    //setLoading();

    const res = await axios.get('https://disease.sh/v3/covid-19/countries');

    dispatch({
      type: GET_ALL_COUNTRY_RESULTS,
      payload: res.data
    });
  };

  return (
    <mapContext.Provider
      value={{
        data: state.data,
        getAllCountriesResult
      }}
    >
      {props.children}
    </mapContext.Provider>
  );
};

export default MapState;
