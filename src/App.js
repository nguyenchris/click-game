import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Game from './components/Game/Game';

class App extends Component {
  render() {
    return (
      <Layout>
        <Game />
      </Layout>
    );
  }
}

export default App;
