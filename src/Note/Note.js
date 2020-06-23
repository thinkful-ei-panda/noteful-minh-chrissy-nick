import React from 'react';
import './Note.css';
import { Link } from 'react-router-dom'

export default function Note(props) {
  return (
    <li
      onClick={() => console.log(props.name)}
      className='note-container'>
      <Link to={`/note/${props.id}`}>
        <div>
          <h3>{props.name}</h3>
        </div>
      </Link>
      <div>
        <button
          onClick={() => props.onClickDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
