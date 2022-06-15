import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'src/constants/routes';

import { AppStackNavigation } from './AppNavigation';
import { AuthStackNavigator } from './AuthNavigation';

const RootStack = createNativeStackNavigator();

export const RootStackNavigation = () => (
  <RootStack.Navigator
    initialRouteName={ROUTES.APP}
    screenOptions={{ headerShown: false }}>
    <RootStack.Screen name={ROUTES.APP} component={AppStackNavigation} />
    <RootStack.Screen name={ROUTES.AUTH} component={AuthStackNavigator} />
  </RootStack.Navigator>
);
