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

  render() {
    return (
      <div className='App'>
        <header>
          <Link to='/'>Noteful</Link>
        </header>
        <div className="flex-container">
          <section className="column sidebar">
            <Route exact path="/" render={() => (
              <FolderList data={this.state.data} isHome={true} />
            )} />
            <Route path="/folder/:folderId"
              render={(props) => (
                <FolderList data={this.state.data} isHome={false} test={props} />
              )} />
            <Route path="/note/:noteId"
              render={(props) => (
                <FolderList data={this.state.data} isHome={false} test={props} />
              )} />
          </section>
          <main className="colomn">
            <Route exact path="/" render={() => (
              <NoteList data={this.state.data} isHome={true} />
            )} />
            <Route path="/folder/:folderId"
              render={(props) => (
                <NoteList data={this.state.data} isHome={false} test={props} />
              )} />
            <Route path="/note/:noteId"
              render={(props) => (
                <NoteList data={this.state.data} isHome={false} test={props} />
              )} />
          </main>
        </div>
      </div>

    );
  }
}

export default App;