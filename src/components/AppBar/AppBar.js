import React from 'react';

import { Menu, Container } from 'semantic-ui-react';

const Bar = () => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>Covid-19 Tracker</Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default Bar;
