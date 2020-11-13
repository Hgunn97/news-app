import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Components/Home';
import PoliticsScreen from './Components/PoliticsScreen';
import SportsScreen from './Components/SportsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Politics" component={PoliticsScreen} />
        <Stack.Screen name="Sports" component={SportsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
