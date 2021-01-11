// import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import Semantic from './components/semantic/semantic';
// import query from 'query-string';
import ColorBox from './components/colorBox/colorBox';
// import PostList from './components/postList/postList';
// import TodoForm from './components/todoForm/todoForm';
// import TodoList from './components/todoList/todoList';
import TodoListPage from './pages/todoListPage';
import Clock from './components/clock/clock';
import Home from './components/home/home';
import { Grid } from 'semantic-ui-react';
// import Clock2 from './components/clock2/clock2';
// import Memo from './components/memo.js/memo';
// const axios = require('axios');

const axios = require('axios');
axios.defaults.baseURL = 'http://js-post-api.herokuapp.com/api';

function App() {
  // const [todoList, setTodoList] = useState(['blue', 'green', 'pink', 'black', 'yellow'])
  // const [postList, setPostList] = useState([])
  // const [pageCount, setPageCount] = useState(0)
  // const [count, setCount] = useState(0)
  // const [pageIndex, setPageIndex] = useState(1)
  // const [filter, setFilter] = useState({
  //   _limit: 10,
  //   _page: 1,
  //   title_like: ''
  // })

  // function handleTodoListClick(todo) {
  //   const newTodoList = [...todoList]

  //   newTodoList.splice(todoList.findIndex(x => x === todo), 1)
  //   setTodoList(newTodoList)
  // }

  // function handleTodoAddClick(value) {
  //   const newTodoList = [...todoList]

  //   newTodoList.push(value)
  //   setTodoList(newTodoList)
  // }

  // function handlePageClick(index) {
  //   setFilter({ ...filter, _page: index })
  // }

  // function handleSearchClick(value) {
  //   setFilter({ ...filter, _page: 1, title_like: value })
  // }

  // useEffect(() => {
  // async function getData() {
  //   try {
  //     const value = query.stringify(filter)
  //     const res = await axios.get(`http://js-post-api.herokuapp.com/api/posts?${value}`);
  //     console.log(`http://js-post-api.herokuapp.com/api/posts?${value}`)
  //     setPostList(res.data.data)
  //     const pagination = res.data.pagination
  //     const pageCountTemp = Math.ceil(pagination._totalRows / pagination._limit)
  //     setPageCount(pageCountTemp)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // getData()
  // }, [])

  return (
    <div className="app">
      <Router>
        <Grid columns={2} divided>
          <Grid.Column width={2} >
            <nav>
              <ul>
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
          <Grid.Column width={14}>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/colorBox">
                <ColorBox />
              </Route>
              <Route path="/clock">
                <Clock />
              </Route>
              <Route path="/">
                <TodoListPage></TodoListPage>
              </Route>
            </Switch>
          </Grid.Column>
        </Grid>
      </Router>
      {/* <ColorBox></ColorBox> */}
      {/* <p>{count}</p> */}
      {/* <button onClick={() => setCount(count + 1)}>increase</button> */}
      {/* <Memo todos={todoList} ></Memo> */}
      {/* <Semantic></Semantic> */}
      {/* <PostList postList={postList} pageCount={pageCount} pageIndex={filter._page}
        onPageClick={handlePageClick} onSearchClick={handleSearchClick}></PostList> */}
      {/* <Clock></Clock>
      <Clock2></Clock2> */}
    </div>
  );
}

export default App;