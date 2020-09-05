import React from 'react';

import { Container, Grid, Header, Segment, Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div>
      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={3} />
            <Grid.Column width={3}>
              © 2020 <br /> Alfie Osayan{' '}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="facebook" size="big" />
              <Icon name="linkedin" size="big" />
              <Icon name="github" size="big" />
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Covid-19 Tracker" />
              <p>A Personal Project to practice & learn React, Hooks, ContextAPI, Semantic UI.</p>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
