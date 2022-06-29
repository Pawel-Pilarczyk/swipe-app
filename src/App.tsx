import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { RootStackNavigation } from './navigation';
import { store } from './store/store';
import { LoadingModal } from './components/Modals/LoaderModal';

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingModal />
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </Provider>
  );
};
