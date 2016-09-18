import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

class AddDeal extends Component {
    constructor() {
        super();
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }
    handleTouchTap() {
        // API.addDeal();
        // browserHistory.push('');
        let title = this.refs.title.getValue();
        let desc = this.refs.desc.getValue();
    }
    render() {
        return (<div>
                <h1>Add deal</h1>
                <TextField
                ref="title"
            hintText="Title"
                /><br />

                <TextField
                ref="descr"
                multiLine={true}
                hintText="Description"
                /><br />

                <RaisedButton label="Create" primary={true} onTouchTap={this.handleTouchTap} />
                </div>
        );
    }
}

export default AddDeal;
