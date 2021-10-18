import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ratingContainer: {
    marginRight: 15,
    height: 45,
    width: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0366d6',
    borderRadius: 45/2,
    borderWidth: 2,
  },
  ratingText: { color: '#0366d6' },
  // Added to prevent text from elongating across screen
  reviewTextContainer: {
    flexShrink: 1,
  },
  username: { marginBottom: 5 },
  createdAt: { marginBottom: 5 },
  text: {},
});

const ReviewItem = ({ review }) => {
  const {
    rating,
    createdAt,
    text,
    user: { username },
  } = review;

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText} fontWeight="bold" fontSize="subheading">
          {rating}
        </Text>
      </View>
      <View style={styles.reviewTextContainer}>
        <Text style={styles.username} fontWeight="bold" fontSize="subheading">
          {username}
        </Text>
        <Text style={styles.createdAt} color="textSecondary">
          {new Date(createdAt).toLocaleString('fi', {
            year: 'numeric',
            month: '2-digit',
            day: 'numeric',
          })}
        </Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
