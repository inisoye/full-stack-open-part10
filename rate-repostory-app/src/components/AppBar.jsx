import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
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
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab textContent="Repositories" url="/" />
        <AppBarTab textContent="Sign in" url="/sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
