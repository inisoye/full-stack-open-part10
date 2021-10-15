import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

import theme from '../theme.js';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
    paddingBottom: 20,
    // eslint-disable-next-line no-dupe-keys
    paddingTop: 50,
    backgroundColor: theme.appBarStyle.backgroundColor,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab textContent="Repositories" />
    </View>
  );
};

export default AppBar;
