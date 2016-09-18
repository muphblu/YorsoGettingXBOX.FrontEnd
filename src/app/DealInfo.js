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

        this.state = {
            dealInfo: null,
            isDocumentAdded: false
        };

        console.log('blabla');
    }

    componentWillReceiveProps(nextProps) {
        console.log('3 Get Deal Info by ID:', nextProps.params.dealId);

        API.getDeal(nextProps.params.dealId)
            .then(dealInfo => this.setState({ dealInfo }));
    }

    componentWillMount() {
        console.log('1 Get Deal Info by ID:', this.props.params.dealId);

        API.getDeal(this.props.params.dealId)
            .then(dealInfo => this.setState({ dealInfo }));
    }

    render() {
        let dealInfoTemplate = null;

        if (this.state.dealInfo) {
            dealInfoTemplate = (
                <div>
                    <h1>{this.state.dealInfo.Title}</h1>
                    <h3>{this.state.dealInfo.Description}</h3>
                    <DocumentUploader />
                    <br />
                    <RaisedButton label="Create" disabled={this.state.isDocumentAdded} primary={true} onTouchTap={this.handleTouchTap} />
                </div>
            );
        } else {
            dealInfoTemplate = <div />;
        }

        return dealInfoTemplate;
    }
}

export default DealInfo;
