import React, { PureComponent } from 'react';
import { loadCities, searchCities } from '../../api/cities';
import debounced from '../../utils/debounced';
import CitiesResults from './CitiesResults';

const DEBOUNCED_MS = 500;
export default class Cities extends PureComponent {
  public state = {
    loading: true,
    starts: '',
    value: '',
  };

  public async componentDidMount() {
    await loadCities();
    this.setState({ loading: false });
  }

  public render() {
    const { loading, starts, value } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <input onChange={this.handleChange} style={{ fontSize: 20 }} value={value} />
        {starts !== '' && <CitiesResults starts={starts} />}
      </div>
    );
  }

  private setStarts = (starts: string) => {
    this.setState({ starts });
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ value });
    this.setStartDebounced(value);
  };

  // tslint:disable-next-line
  private setStartDebounced = debounced(DEBOUNCED_MS, this.setStarts);
}
