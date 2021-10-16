import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  link: {
    marginRight: 20,
  },
  text: {
    color: 'white',
  },
});

const AppBarTab = ({ textContent, url, onPress }) => {
  return (
    <Link style={styles.link} to={url} onPress={onPress}>
      <Text style={styles.text} fontWeight="bold" fontSize="subheading">
        {textContent}
      </Text>
    </Link>
  );
};

export default AppBarTab;
