import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import configureStore from './redux/store';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={configureStore().store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
