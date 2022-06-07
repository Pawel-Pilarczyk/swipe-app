import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'src/constants/routes';

import { Welcome } from 'src/screens/Welcome';
import { Home } from 'src/screens/Home';

const RootStack = createNativeStackNavigator();

export const RootStackNavigation = () => (
  <RootStack.Navigator initialRouteName={ROUTES.WELCOME}>
    <RootStack.Screen name={ROUTES.WELCOME} component={Welcome} />
    <RootStack.Screen name={ROUTES.HOME} component={Home} />
  </RootStack.Navigator>
);
