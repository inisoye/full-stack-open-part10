import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from '@apollo/client';

import AppBarTab from './AppBarTab';
import theme from '../theme.js';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

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
  const { data } = useQuery(GET_AUTHORIZED_USER);

  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab textContent="Repositories" url="/" />
        {data.authorizedUser?.id ? (
          <AppBarTab onPress={logout} textContent="Sign out" url="/sign-in" />
        ) : (
          <AppBarTab textContent="Sign in" url="/sign-in" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
