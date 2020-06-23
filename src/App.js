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
      <div className='App'>
        <header>
          <h1>Notful</h1>
        </header>
        <section className="side-bar">

        </section>
        <main>

        </main>
      </div>

    );
  }
}

export default App;