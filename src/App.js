import React from 'react';

import { Tally, AppBar, Chart, Footer } from './components';

import { fetchData } from './api';

import 'semantic-ui-css/semantic.min.css';

import CountryState from './context/country/CountryState';

class App extends React.Component {
  state = {
    data: {},
    dataPerCountry: {}
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data, content } = this.state;

    return (
      <CountryState>
        <div>
          <AppBar />
          <Tally data={data} />
          <Chart />
          <Footer />
        </div>
      </CountryState>
    );
  }
}

export default App;
