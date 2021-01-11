import React, { useState } from 'react';
import {
    Switch,
    Route, withRouter,
    useRouteMatch,
} from 'react-router-dom';
import ColorBox from '../colorBox/colorBox';
import TodoListPage from '../../pages/todoListPage';
import TitleParamPage from '../../pages/titleParamPage';
import { Grid, Menu, Segment } from 'semantic-ui-react';

function Home(props) {
    let match = useRouteMatch();
    const param = 'aaaa'
    const [activeItem, setActiveItem] = useState('none')

    const handleItemClick = (e, { name }) => {
        console.log('props', props)
        if (name === 'param') {
            props.history.push(`${match.url}/param/:${param}:${param}`)
        }
        else if (name === 'colorbox') {
            props.history.push(`${match.url}/colorbox`)
        }
        else {
            props.history.push(`${match.url}/todoListBage`)
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
                        name='colorbox'
                        active={activeItem === 'colorbox'}
                        onClick={handleItemClick}
                    >
                        {/* <NavLink to={`${match.url}/colorbox`}>ColorBox</NavLink > */}
                    </Menu.Item>
                    <Menu.Item name='todoListBage'
                        active={activeItem === 'todoListBage'}
                        onClick={handleItemClick}>
                        {/* <Link to={`${match.url}/todoListBage`}>TodoListPage</Link> */}
                    </Menu.Item>
                </Menu>
            </Grid.Column>
            <Grid.Column width={12}>
                <Segment attached='bottom'>
                    <Switch>
                        <Route path={`${match.path}/colorbox`}>
                            <ColorBox />
                        </Route>
                        <Route path={`${match.path}/param/:topicId:topic`}>
                            <TitleParamPage />
                        </Route>
                        <Route path={`${match.path}/todoListBage`}>
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