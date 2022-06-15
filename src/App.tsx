import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { RootStackNavigation } from './navigation';
import { store } from './store/store';
import { Text } from 'react-native';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
      <Text>Hello</Text>
    </Provider>
  );
};
