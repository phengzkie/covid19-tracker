import React, { useEffect, useContext } from 'react';

import CountryContext from '../../context/country/countryContext';

import { Card, Icon, Grid, Flag } from 'semantic-ui-react';
import CountUp from 'react-countup';
import moment from 'moment';

const TallyCountry = () => {
  const countryContext = useContext(CountryContext);

  const { getCountryResults, data } = countryContext;

  const { cases, recovered, deaths, updated, countryInfo, country } = data;

  useEffect(() => {
    getCountryResults();
  }, []);

  if (!cases) {
    return <Icon name="spinner" />;
  }

  return (
    <Card fluid>
      <Card.Content>
        <Flag name={countryInfo.iso2.toLowerCase()} />
        {country}
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Column width={5}>
            <Card.Meta>Infected</Card.Meta>
            <Card.Header>
              <CountUp start={0} end={cases} duration={2} separator="," />
            </Card.Header>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card.Meta>Recovered</Card.Meta>
            <Card.Header>
              <CountUp start={0} end={recovered} duration={2} separator="," />
            </Card.Header>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card.Meta>Deaths</Card.Meta>
            <Card.Header>
              <CountUp start={0} end={deaths} duration={2} separator="," />
            </Card.Header>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content extra>Updated less than {moment(updated).fromNow()}.</Card.Content>
    </Card>
  );
};

export default TallyCountry;
