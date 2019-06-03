import React, {Component} from 'react';
import {
    connect
} from 'react-redux';
import PropTypes from 'prop-types';
import {
Table, Tab, Button
} from 'react-bootstrap';
import * as _ from 'lodash';
import {
    getLeads,
    deleteLead
} from '../../redux/actions/leads';

class Leads extends Component{
    static propTypes = {
        leads: PropTypes.array.isRequired
    }
    componentDidMount(){
        this.props.getLeads();
    }

    render(){
        const leads = this.props.leads;
        if(_.isEqual(leads.length, 0)){
            return "loading..."
        }
        return (
            <div>
                <h1>Leads List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leads.map(lead => (
                                <tr key={lead.id}>
                                    <td>
                                        {lead.name}
                                    </td>
                                    <td>
                                        {lead.email}
                                    </td>
                                    <td>
                                    <Button variant="danger"
                                    onClick={() => this.props.deleteLead(lead.id)}
                                    >DELETE</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    leads: state.leads.leads
});


export default connect(mapStateToProps, {
    getLeads,
    deleteLead
})(Leads);