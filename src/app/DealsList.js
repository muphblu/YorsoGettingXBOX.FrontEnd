import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import API from './api';

class DealsList extends Component {
    constructor() {
        super();
        this.state = {
            deals: []
        };
    }
    clicked(id) {
        browserHistory.push('/deal/'+id);
    }
    componentDidMount(){
        console.log("mounted");
        API.getDeals().then(deals => {
            this.setState({deals: deals});
        });
    }
    render() {
        return (<div>
                {this.state.deals.map( deal =>
                                       (<div key={deal.Id}>
                                        <MenuItem
                                        onTouchTap={ e => this.clicked(deal.Id)}>
                                            {deal.Title}
                                        </MenuItem>
                                        <Divider /></div>)
                                     )}
                <RaisedButton label="Add" href="/add" primary={true} style={{marginTop: 20}} />
                </div>);
    }
}

export default DealsList;
