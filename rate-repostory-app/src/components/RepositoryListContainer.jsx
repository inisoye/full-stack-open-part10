import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryListItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
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

export default RepositoryListContainer;
