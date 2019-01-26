import React, { PureComponent } from 'react';
import { City } from '../../../api/cities';

interface Props {
  results: City[];
}

export default class CitiesResultsView extends PureComponent<Props> {
  public render() {
    const { results } = this.props;
    return (
      <ul style={{ listStyleType: 'none' }}>
        {results.map(city => (
          <li key={city.id}>
            {city.city}, {city.state}
          </li>
        ))}
      </ul>
    );
  }
}
