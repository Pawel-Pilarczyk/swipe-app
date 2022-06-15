import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'src/constants/routes';
import { Home } from 'src/screens/Home';

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName={ROUTES.HOME}>
    <AuthStack.Screen name={ROUTES.HOME} component={Home} />
  </AuthStack.Navigator>
);
