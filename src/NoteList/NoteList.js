import React from 'react';
import Note from '../Note/Note'

export default function NoteList(props) {
  const notes = props.data.notes.map(folder => {
    return <Note
      key={folder.id}
      id={folder.id}
      name={folder.name}
    />
  })

  return (
    <div>
      <ul>
        <li><button>Add Note</button></li>
        {notes}
      </ul>
    </div>
  )
}