import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { RootStackNavigation } from './navigation';
import { store } from './store/store';

import { SocialMediaButton } from './components/SocialMediaButton/ index';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
      <SocialMediaButton icon="facebook" title="fb" />
    </Provider>
  );
};
