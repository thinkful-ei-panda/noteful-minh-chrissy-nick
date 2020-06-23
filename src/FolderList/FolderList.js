import React from 'react';
import Folder from '../Folder/Folder'

export default function FolderList(props) {
  let folders = [];

  if (!props.isHome) {
    folders = props.data.folders.find(folder => folder.id === props.test.match.params.folderId)
    folders = <Folder
      key={folders.id}
      id={folders.id}
      name={folders.name} />
  } else {
    folders = props.data.folders.map(folder => {
      return <Folder
        key={folder.id}
        id={folder.id}
        name={folder.name}
      />
    })
  }

  return (
    <div>
      <ul>
        {folders}
      </ul>
      <button>Add Folder</button>
    </div>
  )
}
