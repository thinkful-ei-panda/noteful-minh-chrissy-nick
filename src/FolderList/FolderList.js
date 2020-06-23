import React from 'react';
import Folder from '../Folder/Folder'

export default function FolderList(props) {
  const folders = props.data.folders.map(folder => {
    return <Folder
      key={folder.id}
      id={folder.id}
      name={folder.name}
    />
  })

  return (
    <div>
      <ul>
        {folders}
      </ul>
      <button>Add Folder</button>
    </div>
  )
}
