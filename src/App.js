import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect,
  Link
} from 'react-router-dom';
import ColorBox from './components/colorBox/colorBox';
import TodoListPage from './pages/todoListPage';
import Clock from './components/clock/clock';
import Home from './pages/home';
import { Grid } from 'semantic-ui-react';
import Login from './pages/login';
import firebase from 'firebase';
import { useEffect } from 'react';
import { config } from './firebase/config'

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const axios = require('axios');
axios.defaults.baseURL = 'http://js-post-api.herokuapp.com/api';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = firebase.auth().currentUser
  return (
    <Route {...rest} render={props => (
      currentUser ?
        <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};

function App() {

  //handle firebase
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        // const token = await user.getIdToken()
        // console.log(token)
      } else {
        console.log('user not login')
      }
    });
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