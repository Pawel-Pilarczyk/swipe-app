import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackNavigation } from './AppNavigation';
import { AuthStackNavigator } from './AuthNavigation';

export type RootStackParamList = {
  APP: undefined;
  AUTH: undefined;
  WELCOME: undefined;
  SIGN_IN_SOCIAL_MEDIA: undefined;
  HOME: undefined;
  LOG_IN: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => (
  <RootStack.Navigator
    initialRouteName={'APP'}
    screenOptions={{ headerShown: false }}>
    <RootStack.Screen name={'APP'} component={AppStackNavigation} />
    <RootStack.Screen name={'AUTH'} component={AuthStackNavigator} />
  </RootStack.Navigator>
);
