import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import { autobind } from 'core-decorators';

import API from './api';

// API.getDeals();

class DocumentUploader extends Component {
    constructor() {
        super();
    }

    @autobind
    handleTouchTap() {
        // API.addDeal();
        // browserHistory.push('');
        console.log('text', this.refs.title.getValue());
    }

    render() {
        return (
            <div>
                Lorem Ipsum
            </div>
        );
    }
}

class DealInfo extends Component {
    constructor() {
        super();


    }

    componentDidMount() {
        console.log(this.props.location.query);

        API.getDeal(id)
            .then(dealInfo => this.setState({ dealInfo }));
    }

    // @autobind
    // handleTouchTap() {
    //     // API.addDeal();
    //     // browserHistory.push('');
    //     console.log('text', this.refs.title.getValue());
    // }

    render() {
        return (
            <div>
                <h1>{this.state.dealInfo.Title}</h1>
                <h3>{this.state.dealInfo.Description}</h3>

                <DocumentUploader />

                <br />
                <RaisedButton label="Create" disabled={this.state.isDealAdded} primary={true} onTouchTap={this.handleTouchTap} />
            </div>
        );
    }
}

export default DealInfo;
