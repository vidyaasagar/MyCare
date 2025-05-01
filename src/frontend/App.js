import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <h1>Welcome to the Healthcare App</h1>
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
}

export default App;