import React from 'react';
import {Container, Header, Body, Title} from 'native-base';

import PoliticsCard from './Components/PoliticsCard';
import SportsCard from './Components/SportsCard';

function App() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>News</Title>
        </Body>
      </Header>
      <PoliticsCard />
      <SportsCard />
    </Container>
  );
}

export default App;
