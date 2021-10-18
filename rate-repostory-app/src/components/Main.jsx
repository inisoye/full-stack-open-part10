import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './AppBar';
import CreateReview from './CreateReview';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Switch>
        <Route path="/repositories/:id" exact>
          <SingleRepository />
        </Route>
        <Route path="/repositories" exact>
          <RepositoryList />
        </Route>
        <Route path="/create-review" exact>
          <CreateReview />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
        <Redirect to="/repositories" />
      </Switch>
    </View>
  );
};

export default Main;
