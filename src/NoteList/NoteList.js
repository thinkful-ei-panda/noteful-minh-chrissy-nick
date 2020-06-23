import React from 'react';
import Note from '../Note/Note'

export default function NoteList(props) {
  let notes = [];

  if (!props.isHome) {
    notes = props.data.notes
      .filter(note => note.folderId === props.test.match.params.folderId)
      .map(note => {
        return <Note
          key={note.id}
          id={note.id}
          name={note.name} />
      })
  } else {
    notes = props.data.notes.map(note => {
      return <Note
        key={note.id}
        id={note.id}
        name={note.name}
      />
    })
  }

  return (
    <div>
      <ul>
        <li><button>Add Note</button></li>
        {notes}
      </ul>
    </div>
  )
}