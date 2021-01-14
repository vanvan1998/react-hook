import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link, Route, Switch
} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Clock from '../../share/clock/clock';
import ColorBox from '../../share/colorBox/colorBox';
import AuthenticationService from '../../../domain/services/AuthenticationService';
import Home from '../../home/components';
import Login from '../../login/components';
import TodoListPage from '../../../modules/todoList';
import './App.css';
import PrivateRoute from './privateRoute';
const axios = require('axios');
// axios.defaults.baseURL = 'http://js-post-api.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
    useEffect(() => {
        const unregisterAuthObserver = AuthenticationService.onAuthStateChanged()
        return () => unregisterAuthObserver();
    }, [])
    
    return (
        <div className="app">
            <Router>
                <Grid columns={2} divided>
                    <Grid.Column width={3} >
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/">TodoListPage</Link>
                                </li>
                                <li>
                                    <Link to="/home">home</Link>
                                </li>
                                <li>
                                    <Link to="/colorBox">ColorBox</Link>
                                </li>
                                <li>
                                    <Link to="/clock">Clock</Link>
                                </li>
                            </ul>
                        </nav>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Switch>
                            <Route path="/login">
                                <Login />
                            </Route >
                            <PrivateRoute path="/home" component={Home} />
                            <PrivateRoute exact path="/colorBox" component={ColorBox} />
                            <PrivateRoute exact path="/clock" component={Clock} />
                            <PrivateRoute exact path="/" component={TodoListPage} />
                        </Switch>
                    </Grid.Column>
                </Grid>
            </Router>
        </div>
    );
}

export default App;