import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';
import { Home } from 'src/screens/Home';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName={'HOME'}>
    <AuthStack.Screen name={'HOME'} component={Home} />
  </AuthStack.Navigator>
);
