import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import { autobind } from 'core-decorators';
// import API from './../../api';

class DealInfo extends Component {
    constructor() {
        super();
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }

    @autobind
    handleTouchTap() {
        // API.addDeal();
        // browserHistory.push('');
        console.log('text', this.refs.title.getValue());
    }
    render() {
        return (<div>
                <h1>Add deal</h1>
                <TextField
                ref="title"
            hintText="Deal title"
                /><br />
                <RaisedButton label="Create" primary={true} onTouchTap={this.handleTouchTap} />
                </div>
        );
    }
}

export default DealInfo;
