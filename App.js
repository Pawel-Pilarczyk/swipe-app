import React from 'react';
import {View} from 'react-native';
import {Button, Typography} from 'src/components';
import {FireIcon} from 'src/assets/svg';

export const App = () => {
  return (
    <View>
      <FireIcon />
      <Typography color="blue" size="32" centered type="bold">
        Hello
      </Typography>
      <Button />
    </View>
  );
};
