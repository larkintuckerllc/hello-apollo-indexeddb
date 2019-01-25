import React, { PureComponent } from 'react';
import { loadCities, searchCities } from '../../api/cities';

export default class Cities extends PureComponent {
  public state = {
    loading: true,
  };

  public async componentDidMount() {
    await loadCities();
    const cities = await searchCities('a');
    window.console.log(cities);
    this.setState({ loading: false });
  }

  public render() {
    const { loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>Cities</div>;
  }
}
