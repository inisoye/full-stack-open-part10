import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';

import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';

import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    paddingBottom: 15,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  let { id } = useParams();

  const { data } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { id },
  });

  const reviewNodes = data
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <View style={styles.container}>
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo data={data} />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default SingleRepository;
