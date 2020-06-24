import React from 'react';


export default function FolderList(props) {


  return (
    <div>
      <button
        onClick={() => props.test.history.goBack()}
      >Go back
      </button>
      <h2>Folder Name</h2>
    </div>
  )
}
