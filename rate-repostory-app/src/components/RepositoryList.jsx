import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import useRepositories from '../hooks/useRepositories';
import RepositoryListItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <RepositoryListItem
      fullName={item.fullName}
      description={item.description}
      language={item.language}
      forksCount={item.forksCount}
      stargazersCount={item.stargazersCount}
      ratingAverage={item.ratingAverage}
      reviewCount={item.reviewCount}
      ownerAvatarUrl={item.ownerAvatarUrl}
    />
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.fullName}
    />
  );
};

export default RepositoryList;
