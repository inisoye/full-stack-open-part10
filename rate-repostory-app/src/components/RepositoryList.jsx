import React from 'react';

import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { data } = useRepositories();

  return <RepositoryListContainer repositories={data?.repositories} />;
};

export default RepositoryList;
