import React, { Component } from "react";
import NotefulContext from "../NotefulContext.js";

export default class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  static contextType = NotefulContext;

  handleSubmit(event) {
    event.preventDefault();
    console.log('test')
    this.props.resetFunction();
    this.context.createFolder(this.nameInput.current.value);
  }

  render() {
    if (this.props.active) {
      return (
        <form className="add-folder" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="add-folder">Add Folder</label>
          <input name="add-folder" id="add-folder" type="text" ref={this.nameInput}></input>
          <input type="submit" value="Submit" id="add-folder-submit" />
          {/* after we update the list and click submit we should set state in folderList back to false */}
        </form>
      );
    }
    return <></>
  };
}