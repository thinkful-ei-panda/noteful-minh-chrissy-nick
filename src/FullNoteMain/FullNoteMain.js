import React from 'react';
import Note from '../Note/Note'

export default function FolderList(props) {
  console.log(props)
  let noteObj = props.data.notes.find(note => note.id === props.test.match.params.noteId);

  let note = <Note
    key={noteObj.id}
    id={noteObj.id}
    name={noteObj.name}
    dateMod={noteObj.modified}
  />

  return (
    <div>
      <section>
        {note}
        <p>{noteObj.content}</p>
      </section>
    </div>
  )
}