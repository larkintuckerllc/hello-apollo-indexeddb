import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import CitiesResultsView from './CitiesResultsView';

interface Props {
  starts: string;
}

const SEARCH_CITIES = gql`
  query searchCities($starts: String!) {
    searchCities(starts: $starts) @client {
      id
      city
      state
    }
  }
`;

const CitiesResults = ({ starts }: Props) => (
  <Query query={SEARCH_CITIES} fetchPolicy="no-cache" variables={{ starts: 'b' }}>
    {({ data: { searchCities }, loading }) => {
      if (loading) {
        return <div>Loading...</div>;
      }
      return <CitiesResultsView results={searchCities} />;
    }}
  </Query>
);

export default CitiesResults;
