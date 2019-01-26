import ApolloClient from 'apollo-boost';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Cities from './components/Cities';
import defaults from './graphql/defaults';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const client = new ApolloClient({
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
});

class App extends Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <Cities />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
