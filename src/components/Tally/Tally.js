import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import { Card, Icon, Grid, Container, Divider, Flag } from 'semantic-ui-react';
import CountUp from 'react-countup';
import cx from 'classnames';

import moment from 'moment';

import styles from './Tally.module.css';

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
            <Card fluid>
              <Card.Content>
                <Flag name="ph" />Philippines
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
          </Grid.Column>
          <Grid.Column verticalAlign="left">
            <Card.Content header="World Map" />
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    // {/* <div className={styles.map}>
    //   <MapChart setTooltipContent={setContent} />
    //   <ReactTooltip>{content}</ReactTooltip>
    // </div> */}
    // {/* <Grid container spacing={2}>
    //   <Grid container item xs={12} spacing={3}>
    //     <Grid item xs component={Card} className={styles.card}>
    //       Cases
    //     </Grid>
    //     <Grid item xs component={Card} className={cx(styles.card, styles.map)}>
    //       <MapChart setTooltipContent={setContent} />
    //       <ReactTooltip>{content}</ReactTooltip>
    //     </Grid>
    //   </Grid> */}

    // {/* <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
    //         <CardContent>
    //           <Typography color="textSecondary" gutterBottom>
    //             Infected
    //           </Typography>
    //           <Typography variant="h5">
    //             <CountUp start={0} end={cases} duration={2} separator="," />
    //           </Typography>
    //           <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
    //           <Typography variant="body2">Number of infected cases of Covid19</Typography>
    //         </CardContent>
    //       </Grid>
    //       <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.active)}>
    //         <CardContent>
    //           <Typography color="textSecondary" gutterBottom>
    //             Active
    //           </Typography>
    //           <Typography variant="h5">
    //             <CountUp start={0} end={active} duration={2} separator="," />
    //           </Typography>
    //           <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
    //           <Typography variant="body2">Number of active cases of Covid19</Typography>
    //         </CardContent>
    //       </Grid>
    //       <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
    //         <CardContent>
    //           <Typography color="textSecondary" gutterBottom>
    //             Recovered
    //           </Typography>
    //           <Typography variant="h5">
    //             <CountUp start={0} end={recovered} duration={2} separator="," />
    //           </Typography>
    //           <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
    //           <Typography variant="body2">Number of active recoveries of Covid19</Typography>
    //         </CardContent>
    //       </Grid>
    //       <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
    //         <CardContent>
    //           <Typography color="textSecondary" gutterBottom>
    //             Deaths
    //           </Typography>
    //           <Typography variant="h5">
    //             <CountUp start={0} end={deaths} duration={2} separator="," />
    //           </Typography>
    //           <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
    //           <Typography variant="body2">Number of deaths caused by Covid19</Typography>
    //         </CardContent>
    //       </Grid> */}
    // {/* </Grid> */}
  );
};

export default Tally;
