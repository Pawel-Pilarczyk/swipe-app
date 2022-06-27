import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'src/constants/routes';
import { Welcome } from 'src/screens/Welcome';
import { SignInSocialMedia } from 'src/screens/SignIn/SocialMedia';

const AppStack = createNativeStackNavigator();

export const AppStackNavigation = () => (
  <AppStack.Navigator
    initialRouteName={ROUTES.SIGN_IN_SOCIAL_MEDIA}
    screenOptions={{ headerShown: false }}>
    <AppStack.Screen name={ROUTES.WELCOME} component={Welcome} />
    <AppStack.Screen
      name={ROUTES.SIGN_IN_SOCIAL_MEDIA}
      component={SignInSocialMedia}
    />
  </AppStack.Navigator>
);
