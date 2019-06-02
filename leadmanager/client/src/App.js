import React from 'react';
import {
BrowserRouter,
Route,
Link
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Help from './components/Help';

function App() {
  return (
    <BrowserRouter>
    <Link to="/">Dashboard</Link>
    <Link to="/help">Help</Link>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/help" exact component={Help}/>
    </BrowserRouter>
  );
}

export default App;
