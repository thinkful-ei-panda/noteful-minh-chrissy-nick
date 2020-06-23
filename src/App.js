import React from 'react';
import { Route, Link } from 'react-router-dom'
import dummyData from './data';
import FolderList from './FolderList/FolderList'
import NoteList from './NoteList/NoteList'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData
    };
  }

  //delete ()

  render() {
    return (
      <div className='App'>
        <header>
          <Link to='/'>Noteful</Link>
        </header>
        <div className="flex-container">
          <section className="column sidebar">
            <Route exact path="/" render={(data) => (
              <FolderList data={this.state.data} />
            )} />
            <Route exact path="/folder/:folderId" component={FolderList} />
          </section>
          <main className="colomn">
            <Route exact path="/" render={(data) => (
              <NoteList data={this.state.data} />
            )} />
          </main>
        </div>
      </div>

    );
  }
}

export default App;