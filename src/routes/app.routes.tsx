import React from 'react';
import HomePage from '../pages/Home';
import PokemonPage from '../pages/Pokemon';

import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={HomePage} />
    <AppStack.Screen name="Pokemon" component={PokemonPage} />
  </AppStack.Navigator>
);

export default AppRoutes;
