import React from 'react';
import {Provider} from 'react-redux';
import store from './src/services/stores';
import {NavigationContainer} from '@react-navigation/native';
import NavigationApp from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationApp />
      </NavigationContainer>
    </Provider>
  );
}
