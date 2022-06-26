import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'src/constants/routes';
import { Welcome } from 'src/screens/Welcome';

const AppStack = createNativeStackNavigator();

export const AppStackNavigation = () => (
  <AppStack.Navigator
    initialRouteName={ROUTES.WELCOME}
    screenOptions={{ headerShown: false }}>
    <AppStack.Screen name={ROUTES.WELCOME} component={Welcome} />
  </AppStack.Navigator>
);
