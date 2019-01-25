import React, { PureComponent } from 'react';
import { loadCities } from '../../api/cities';

export default class Cities extends PureComponent {
  public state = {
    loading: true,
  };

  public async componentDidMount() {
    await loadCities();
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
