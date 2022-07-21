import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackNavigation } from './AppNavigation';
import { AuthStackNavigator } from './AuthNavigation';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  APP: undefined;
  AUTH: undefined;
  WELCOME: undefined;
  SIGN_IN_SOCIAL_MEDIA: undefined;
  HOME: undefined;
  LOG_IN: {
    type: 'login' | 'signup';
  };
  SIGN_UP: {
    type: 'login' | 'signup';
  };
  COUNTRY_PICKER: undefined;
};
export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => (
  <RootStack.Navigator
    initialRouteName={'APP'}
    screenOptions={{ headerShown: false }}>
    <RootStack.Screen name={'APP'} component={AppStackNavigation} />
    <RootStack.Screen name={'AUTH'} component={AuthStackNavigator} />
  </RootStack.Navigator>
);
