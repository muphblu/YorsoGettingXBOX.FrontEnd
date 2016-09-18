import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class DealsList extends Component {
    constructor() {
        super();
        this.state = {
            deals: [{Id:"1", "Title":"TEST"},{Id:"2", "Title":"TEST 2"}]
        };
    }
    clicked(id) {
        browserHistory.push('/deal/'+id);
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
