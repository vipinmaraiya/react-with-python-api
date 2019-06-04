import React from 'react';
import Leads from './leads/Leads';
import Alert from './layout/alert';

function Dashboard(){
    return (
        <div>
            <h1>Dashboard</h1>
            <Leads />
            <Alert />
        </div>
    )
}
export default Dashboard;