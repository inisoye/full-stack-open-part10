import React from 'react';
import { render } from '@testing-library/react-native';

import RepositoryListContainer from '../../components/RepositoryListContainer';
import { formatThousandToK } from '../../utils';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const repository1 = repositories.edges[0].node;
      const repository2 = repositories.edges[1].node;

      const repositoryNames = getAllByTestId('fullName');
      expect(repositoryNames[0]).toHaveTextContent(repository1.fullName);
      expect(repositoryNames[1]).toHaveTextContent(repository2.fullName);

      const repositoryDescriptions = getAllByTestId('description');
      expect(repositoryDescriptions[0]).toHaveTextContent(
        repository1.description
      );
      expect(repositoryDescriptions[1]).toHaveTextContent(
        repository2.description
      );

      const repositoryLanguages = getAllByTestId('language');
      expect(repositoryLanguages[0]).toHaveTextContent(repository1.language);
      expect(repositoryLanguages[1]).toHaveTextContent(repository2.language);

      const repositoryForks = getAllByTestId('forks');
      expect(repositoryForks[0]).toHaveTextContent(
        formatThousandToK(repository1.forksCount)
      );
      expect(repositoryForks[1]).toHaveTextContent(
        formatThousandToK(repository2.forksCount)
      );

      const repositoryReviews = getAllByTestId('reviews');
      expect(repositoryReviews[0]).toHaveTextContent(repository1.reviewCount);
      expect(repositoryReviews[1]).toHaveTextContent(repository2.reviewCount);

      const repositoryStars = getAllByTestId('stars');
      expect(repositoryStars[0]).toHaveTextContent(
        formatThousandToK(repository1.stargazersCount)
      );
      expect(repositoryStars[1]).toHaveTextContent(
        formatThousandToK(repository2.stargazersCount)
      );

      const repositoryRatings = getAllByTestId('rating');
      expect(repositoryRatings[0]).toHaveTextContent(repository1.ratingAverage);
      expect(repositoryRatings[1]).toHaveTextContent(repository2.ratingAverage);
    });
  });
});
