import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
const countries: Array<TCountry> = require('./data.json');
import { greyLight, white } from 'src/styles/colors';
import { scaling } from 'src/styles/scaling';
import { CountryPickerButton } from 'src/components/CoutryPickerButton';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';

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
  const [search, setSearch] = useState('');

  const handlePress = (c: TCountry) => () => setActiveCounty(c);

  const handleNextPagePress = () =>
    setPage(p => (p < countries.length ? p + 5 : p));

  const handlePrevPagePress = () => setPage(p => (p === 0 ? p : p - 5));

  useEffect(() => {
    const countriesCopy = [...countries];
    setCountriesToDisplay(countriesCopy.splice(page, 5));
  }, [page]);

  useEffect(() => {
    const countriesCopy = [...countries];
    if (search) {
      setCountriesToDisplay(
        countriesCopy.filter(c =>
          c.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    } else {
      setCountriesToDisplay(countriesCopy.splice(page, 5));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const countriesItems = () => {
    return countriesToDisplay.map(item => (
      <CountryPickerButton
        active={item.code === activeCountry?.code}
        code={item.code}
        countryName={item.name}
        onPress={handlePress(item)}
        key={item.code}
        testID={'btn' + item.code}
      />
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Input
        type="search"
        label="Search"
        text={search}
        onChangeText={t => setSearch(t)}
        testID="search"
      />
      {countriesItems()}
      <View style={styles.buttonsContainer}>
        <Button
          title="<"
          onPress={handlePrevPagePress}
          style={styles.button}
          disabled={!!search}
          testID="buttonPrev"
        />
        <Button
          title="Next"
          onPress={() => []}
          disabled={!activeCountry}
          testID="buttonContinue"
        />
        <Button
          title=">"
          onPress={handleNextPagePress}
          style={styles.button}
          disabled={!!search}
          testID="buttonNext"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    paddingHorizontal: scaling.hs(10),
    minHeight: '100%',
  },

  buttonsContainer: {
    flexDirection: 'row',
    borderColor: greyLight,
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  button: {
    width: '10%',
    marginBottom: scaling.vs(20),
  },
});
