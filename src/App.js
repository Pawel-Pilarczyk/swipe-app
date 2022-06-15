import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigation } from './navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};
