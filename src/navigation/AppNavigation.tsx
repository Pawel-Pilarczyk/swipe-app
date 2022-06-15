import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'src/constants/routes';

import { Welcome } from 'src/screens/Welcome';
import { Home } from 'src/screens/Home';

const AppStack = createNativeStackNavigator();

export const AppStackNavigation = () => (
  <AppStack.Navigator initialRouteName={ROUTES.WELCOME}>
    <AppStack.Screen name={ROUTES.WELCOME} component={Welcome} />
  </AppStack.Navigator>
);
