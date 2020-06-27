import React, { Component } from "react";
import NotefulContext from "../NotefulContext.js";
import PropTypes from 'prop-types'

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.bodyInput = React.createRef();
  }

  static contextType = NotefulContext;

  handleSubmit(event) {
    event.preventDefault();
    this.props.resetFunction();
    const today = new Date();
    this.context.post({
      name: this.nameInput.current.value,
      modified: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
      folderId: this.props.folderId,
      content: this.bodyInput.current.value
    }, "notes");
  }

  render() {
    if (this.props.active) {
      return (
        <form className="add-note" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="add-note">Add Note</label>
          <input name="note-name" id="note-name" type="text" ref={this.nameInput}></input>
          <input name="note-body" id="note-body" type="text" ref={this.bodyInput}></input>
          <input type="submit" value="Submit" id="add-note-submit" />
          {/* after we update the list and click submit we should set state in folderList back to false */}
        </form>
      );
    }
    return <></>
  };
}

AddNote.propTypes = {
  active: PropTypes.bool.isRequired,
  folderId: PropTypes.string.isRequired,
  resetFunction: PropTypes.func.isRequired
}