import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import RepositoryStat from './RepositoryStat';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  top: {
    flexDirection: 'row',
  },
  details: {
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 3,
  },
  description: { marginTop: 8 },
  language: {
    padding: 5,
    backgroundColor: '#0366d6',
    borderRadius: 3,
    marginTop: 10,
  },
  languageText: { color: 'white' },
  stats: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
});

const RepositoryListItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.avatar}
          source={{
            uri: ownerAvatarUrl,
          }}
        />

        <View style={styles.details}>
          <Text fontWeight="bold" fontSize="subheading">
            {fullName}
          </Text>
          <Text style={styles.description} color="textSecondary">
            {description}
          </Text>
          <View style={styles.language}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <RepositoryStat statValue={stargazersCount} statText="Stars" />
        <RepositoryStat statValue={forksCount} statText="Forks" />
        <RepositoryStat statValue={reviewCount} statText="Reviews" />
        <RepositoryStat statValue={ratingAverage} statText="Rating" />
      </View>
    </View>
  );
};

export default RepositoryListItem;
