import React from 'react';
import {Container, Header, Body, Title} from 'native-base';

import PoliticsCard from './PoliticsCard';
import SportsCard from './SportsCard';

function Home() {
  return (
    <Container>
      <PoliticsCard />
      <SportsCard />
    </Container>
  );
}

export default Home;
