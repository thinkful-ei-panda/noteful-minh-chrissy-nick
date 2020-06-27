import React from 'react';
import NotefulContext from '../NotefulContext'

export default class FolderList extends React.Component {
  static contextType = NotefulContext;

  render() {
    const { folders, notes } = this.context;
    console.log(notes);
    const noteObj = notes.find(note => note.id === this.props.match.params.noteId)
    console.log(noteObj.id);
    console.log(this.props.match.params.noteId);
    console.log(noteObj);
    const folderId = noteObj.folderId;

    const folderName = folders.find(folder => folder.id === folderId)

    return (
      <div>
        <button
          onClick={() => this.props.history.goBack()}
        >Go back
      </button>
        <h2>{folderName.name}</h2>
      </div >
    )
  }
}
