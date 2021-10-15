import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

const AppBarTab = ({ textContent }) => {
  return (
    <Pressable>
      <Text style={styles.text} fontWeight="bold" fontSize="subheading">
        {textContent}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
