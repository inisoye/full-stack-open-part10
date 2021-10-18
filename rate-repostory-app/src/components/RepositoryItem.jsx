import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { useHistory } from 'react-router-native';

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

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  const history = useHistory();

  return (
    <Pressable onPress={() => history.push(`/repositories/${id}`)}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            style={styles.avatar}
            source={{
              uri: ownerAvatarUrl,
            }}
          />

          <View style={styles.details}>
            <Text fontWeight="bold" fontSize="subheading" testID="fullName">
              {fullName}
            </Text>
            <Text
              style={styles.description}
              color="textSecondary"
              testID="description"
            >
              {description}
            </Text>
            <View style={styles.language}>
              <Text style={styles.languageText} testID="language">
                {language}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.stats}>
          <RepositoryStat
            statValue={stargazersCount}
            statText="Stars"
            testID="stars"
          />
          <RepositoryStat
            statValue={forksCount}
            statText="Forks"
            testID="forks"
          />
          <RepositoryStat
            statValue={reviewCount}
            statText="Reviews"
            testID="reviews"
          />
          <RepositoryStat
            statValue={ratingAverage}
            statText="Rating"
            testID="rating"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
