import React from 'react';
import './Note.css';

export default function Note(props) {
  return (
    <li
      onClick={() => console.log(props.name)}
      className='note-container'>
      <div className='Note__description'>
        <h3>{props.name}</h3>
      </div>
      <div className='Note__description'>
        <button
          className='Note__description'
          onClick={() => props.onClickDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
