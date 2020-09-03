import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/all';

const urlPerCountry = 'https://disease.sh/v3/covid-19/countries'

export const fetchData = async () => {
  try {
    const {
      data: { cases, recovered, deaths, active, todayCases, todayRecovered, todayDeaths, updated }
    } = await axios.get(url);

    return {
      cases,
      recovered,
      deaths,
      active,
      todayCases,
      todayRecovered,
      todayDeaths,
      updated
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataPerCountry = async () => {
  try {
    const {
      data: { cases, recovered, deaths, active, todayCases, todayRecovered, todayDeaths, updated }
    } = await axios.get(urlPerCountry);

    return {
      cases,
      recovered,
      deaths,
      active,
      todayCases,
      todayRecovered,
      todayDeaths,
      updated
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { todayCases, todayRecovered, todayDeaths, updated }
    } = await axios.get(url);
  } catch (error) {
    console.log(error);
  }
}
