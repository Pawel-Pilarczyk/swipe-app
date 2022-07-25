import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
const countries: Array<TCountry> = require('./data.json');
import { CountryPickerButton } from 'src/components/CoutryPickerButton';
import { Button } from 'src/components/Button';
import { greyLight, white } from 'src/styles/colors';
import { scaling } from 'src/styles/scaling';

type TCountry = {
  name: string;
  code: string;
};

export const CountryPicker = () => {
  const [countriesToDisplay, setCountriesToDisplay] = useState<Array<TCountry>>(
    [],
  );
  const [activeCountry, setActiveCounty] = useState<TCountry>();
  const [page, setPage] = useState(0);

  const handlePress = (c: TCountry) => () => setActiveCounty(c);

  const handleNextPagePress = () =>
    setPage(p => (p < countries.length ? p + 6 : p));

  const handlePrevPagePress = () => setPage(p => (p === 0 ? p : p - 6));

  useEffect(() => {
    setCountriesToDisplay(countries.splice(page, 6));
  }, [page]);

  const countriesItems = countriesToDisplay.map(item => (
    <CountryPickerButton
      active={item.code === activeCountry?.code}
      code={item.code}
      countryName={item.name}
      onPress={handlePress(item)}
      key={item.code}
    />
  ));
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {countriesItems}
      <View style={styles.buttonContainer}>
        <Button title="<" type="ghost" onPress={handlePrevPagePress} />
        <Button title=">" type="ghost" onPress={handleNextPagePress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    paddingHorizontal: scaling.hs(10),
  },

  buttonContainer: {
    flexDirection: 'row',
    borderColor: greyLight,
  },
});
