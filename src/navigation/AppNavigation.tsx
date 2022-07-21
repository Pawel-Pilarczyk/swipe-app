import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';
import { Welcome } from 'src/screens/Welcome';
import { SignInSocialMedia } from 'src/screens/SignIn/SocialMedia';
import { Login } from 'src/screens/Login';
import { CountryPicker } from 'src/screens/CountryPicker';

const AppStack = createNativeStackNavigator<RootStackParamList>();

export const AppStackNavigation = () => {
  return (
    <AppStack.Navigator
      initialRouteName="COUNTRY_PICKER"
      screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="WELCOME" component={Welcome} />
      <AppStack.Screen
        name="SIGN_IN_SOCIAL_MEDIA"
        component={SignInSocialMedia}
      />
      <AppStack.Screen
        name="LOG_IN"
        component={Login}
        initialParams={{ type: 'login' }}
      />
      <AppStack.Screen
        name="SIGN_UP"
        component={Login}
        initialParams={{ type: 'signup' }}
      />
      <AppStack.Screen name="COUNTRY_PICKER" component={CountryPicker} />
    </AppStack.Navigator>
  );
};
