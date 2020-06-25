import React, { Component } from "react";

export default class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    if (this.props.active) {
      return (
        <form className="add-folder">
          <label htmlFor="add-folder">Add Folder</label>
          <input name="add-folder" id="add-folder" type="text"></input>
          {/* after we update the list and click submit we should set state in folderList back to false */}
        </form>
      );
    }
    return <></>
  };
}