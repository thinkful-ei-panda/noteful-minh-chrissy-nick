import React, { Component } from "react";

export default class AddFolder extends Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log('test')
    this.props.resetFunction();
  }

  render() {
    if (this.props.active) {
      return (
        <form className="add-folder" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="add-folder">Add Folder</label>
          <input name="add-folder" id="add-folder" type="text"></input>
          <input type="submit" value="Submit" id="add-folder-submit" />
          {/* after we update the list and click submit we should set state in folderList back to false */}
        </form>
      );
    }
    return <></>
  };
}