import React from 'react';
import {View} from 'react-native';

import PoliticsCard from './PoliticsCard';
import SportsCard from './SportsCard';

function Home() {
  return (
    <View>
      <PoliticsCard />
      <SportsCard />
    </View>
  );
}

export default Home;
