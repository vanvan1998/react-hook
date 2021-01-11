import React, { useState } from 'react';
import {
    Switch,
    Route, withRouter,
    useRouteMatch,
} from 'react-router-dom';
import ColorBox from '../components/colorBox/colorBox';
import TodoListPage from './todoListPage';
import TitleParamPage from './titleParamPage';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import firebase from 'firebase';

function Home(props) {
    let match = useRouteMatch();
    const param = 'aaaa'
    const [activeItem, setActiveItem] = useState('none')

    const handleItemClick = (e, { name }) => {
        if (name === 'param') {
            props.history.push(`${match.url}/param/:${param}:${param}`)
        }
        else if (name === 'colorBox') {
            props.history.push(`${match.url}/colorBox`)
        }
        else if (name === 'logout') {
            firebase.auth().signOut()
            props.history.push('/login')
        }
        else {
            props.history.push(`${match.url}/todoListPage`)
        }
        setActiveItem(name)
    }
    return (
        <Grid >
            <Grid.Column width={4}>
                <Menu fluid vertical tabular>
                    <Menu.Item
                        name='param'
                        active={activeItem === 'param'}
                        onClick={handleItemClick}
                    >
                        {/* <NavLink to={`${match.url}/param/:${param}:${param}`}>Title Param</NavLink > */}
                    </Menu.Item>
                    <Menu.Item
                        name='colorBox'
                        active={activeItem === 'colorBox'}
                        onClick={handleItemClick}
                    >
                        {/* <NavLink to={`${match.url}/colorBox`}>ColorBox</NavLink > */}
                    </Menu.Item>
                    <Menu.Item name='todoListPage'
                        active={activeItem === 'todoListPage'}
                        onClick={handleItemClick}>
                        {/* <Link to={`${match.url}/todoListPage`}>TodoListPage</Link> */}
                    </Menu.Item>
                    <Menu.Item name='logout'
                        active={activeItem === 'logout'}
                        onClick={handleItemClick}>
                    </Menu.Item>
                </Menu>
            </Grid.Column>
            <Grid.Column width={12}>
                <Segment attached='bottom'>
                    <Switch>
                        <Route path={`${match.path}/colorBox`}>
                            <ColorBox />
                        </Route>
                        <Route path={`${match.path}/param/:topicId:topic`}>
                            <TitleParamPage />
                        </Route>
                        <Route path={`${match.path}/todoListPage`}>
                            <TodoListPage></TodoListPage>
                        </Route>
                        <Route path={match.path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                    </Switch>
                </Segment>
            </Grid.Column>
        </Grid>
    );
}

export default withRouter(Home);