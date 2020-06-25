import React, {Component} from "react";

export default class AddFolder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        if (this.props.message === "display") {
            return (
                <form className="add-folder">
                    <label htmlFor="add-folder">Add Folder</label>
                    <input name="add-folder" id="add-folder" type="text"></input>
                </form>
            );
        }
        return <></>
    };
}