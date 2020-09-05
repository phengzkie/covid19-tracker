import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import { Card, Icon, Grid, Container, Flag } from 'semantic-ui-react';
import CountUp from 'react-countup';

import moment from 'moment';

import TallyCountry from './TallyCountry';

import { MapChart } from '../../components';

const Tally = ({ data: { cases, recovered, deaths, active, updated } }) => {
  const [ content, setContent ] = useState('');

  if (!cases) {
    return <Icon name="spinner" />;
  }

  return (
    <Container style={{ marginTop: '5em' }}>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Row>
          <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Icon name="world" />Worldwide
              </Card.Content>
              <Card.Content>
                <Grid>
                  <Grid.Column width={5}>
                    <Card.Meta>Total Cases</Card.Meta>
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
            <TallyCountry />
          </Grid.Column>
          <Grid.Column>
            <Card.Content header="World Map" />
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Tally;
