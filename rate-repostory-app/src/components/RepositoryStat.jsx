import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './Text';

import { formatThousandToK } from '../utils';

const styles = StyleSheet.create({
  value: {
    textAlign: 'center',
    marginBottom: 5,
  },
  label: {
    textAlign: 'center',
  },
});

const RepositoryListItem = ({ statValue, statText, testID }) => {
  return (
    <View>
      <Text style={styles.value} fontWeight="bold" testID={testID}>
        {formatThousandToK(statValue)}
      </Text>
      <Text style={styles.label} color="textSecondary">
        {statText}
      </Text>
    </View>
  );
};

export default RepositoryListItem;
