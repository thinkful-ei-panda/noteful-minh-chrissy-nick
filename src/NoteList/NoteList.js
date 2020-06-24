import React from 'react';
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'

export default class NoteList extends React.Component {
  static contextType = NotefulContext;

  render() {
    const { notes } = this.context;
    let noteList = [];

    if (this.props.match.params.folderId) {
      noteList = notes
        .filter(note => note.folderId === this.props.match.params.folderId)
        .map(note => {
          return <Note
            key={note.id}
            id={note.id}
            name={note.name}
            dateMod={note.modified}
          />
        })
    } else {
      noteList = notes.map(note => {
        return <Note
          key={note.id}
          id={note.id}
          name={note.name}
          dateMod={note.modified}
        />
      })
    }

    return (
      <div>
        <ul>
          <li><button>Add Note</button></li>
          {noteList}
        </ul>
      </div>
    )
  }

}