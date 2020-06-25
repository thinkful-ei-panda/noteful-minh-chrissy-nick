import React from 'react';
import Folder from '../Folder/Folder'
import NotefulContext from '../NotefulContext'
import AddFolder from '../AddFolder/AddFolder'

export default class FolderList extends React.Component {
  static contextType = NotefulContext;
  message="";
  handleAddFolder(){
    this.message="display"
  }
  render() {
    const { folders } = this.context;
    let folderList = [];

    if (this.props.match.params.folderId) {
      folderList = folders.find(folder => folder.id === this.props.match.params.folderId)
      folderList = <Folder
        key={folderList.id}
        id={folderList.id}
        name={folderList.name} />
    } else {
      folderList = folders.map(folder => {
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
          {folderList}
        </ul>
        <AddFolder message={this.message}/>
        <button onClick={this.handleAddFolder}>Add Folder</button>
      </div>
    )
  }

}
