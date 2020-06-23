import React from 'react';
import './Folder.css';

export default function Folder(props) {
  return (
    <li
      onClick={() => console.log(props.name)}
      className='folder-container'>
      <div className='Note__description'>
        <h3>{props.name}</h3>
      </div>
    </li>
  )
}
