import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

import Text from './Text';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 15,
    marginBottom: 10,
  },
  openButton: {
    padding: 15,
    backgroundColor: '#0366d6',
    borderRadius: 4,
    marginHorizontal: 15,
  },
  openButtonText: {
    textAlign: 'center',
    color: 'white',
  },
});

const RepositoryInfo = ({ data }) => {
  return (
    <View style={styles.container}>
      <RepositoryItem {...data?.repository} />

      <Pressable
        style={styles.openButton}
        onPress={() => Linking.openURL(`${data?.repository.url}`)}
      >
        <Text
          fontWeight="bold"
          style={styles.openButtonText}
          testID="openButton"
        >
          Open in GitHub
        </Text>
      </Pressable>
    </View>
  );
};

export default RepositoryInfo;
