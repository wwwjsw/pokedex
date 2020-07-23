import React from 'react';
import HomePage from '../pages/Home';
import PokemonPage from '../pages/Pokemon';

import {createStackNavigator} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Pokemon: {pokemonId: string};
};

const AppStack = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Screen name="Home" component={HomePage} />
    <AppStack.Screen name="Pokemon" component={PokemonPage} />
  </AppStack.Navigator>
);

export default AppRoutes;
