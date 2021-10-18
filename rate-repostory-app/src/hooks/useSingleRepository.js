import { useQuery } from '@apollo/client';

import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const useSingleRepository = (id) => {
  const { data } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  return { data };
};

export default useSingleRepository;
