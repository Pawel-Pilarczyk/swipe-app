import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const countries: Array<TCountry> = require('./data.json');

type TCountry = {
  name: string;
  code: string;
};
export const CountryPicker = () => {
  return (
    <View>
      <Text>{}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
