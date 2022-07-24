import { ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
const countries: Array<TCountry> = require('./data.json');
import { CountryPickerButton } from 'src/components/CoutryPickerButton';

type TCountry = {
  name: string;
  code: string;
};

export const CountryPicker = () => {
  const [activeCountry, setActiveCounty] = useState('');

  const handlePress = (code: string) => () => setActiveCounty(code);

  const countriesItems = countries.map(item => (
    <CountryPickerButton
      active={item.code === activeCountry}
      code={item.code}
      countryName={item.name}
      onPress={handlePress(item.code)}
      key={item.code}
    />
  ));
  return (
    <ScrollView contentContainerStyle={{ marginHorizontal: 10 }}>
      {countriesItems}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
