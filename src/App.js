import React from 'react';
import { Route } from 'react-router-dom';
import dummyData from './data';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <main className='App'>
      </main>
    );
  }
}

export default App;