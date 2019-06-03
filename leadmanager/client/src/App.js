import React from 'react';
import {
BrowserRouter,
Route,
Link
} from 'react-router-dom';
import {
Provider
} from 'react-redux';
import Dashboard from './components/Dashboard';
import Help from './components/Help';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/">Dashboard</Link>
        <Link to="/help">Help</Link>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/help" exact component={Help}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
