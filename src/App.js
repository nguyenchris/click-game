import React, { Component } from 'react';
import Album from './components/Album';
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
      </Layout>
    );
  }
}

export default App;
