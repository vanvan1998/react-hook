import { connect } from 'react-redux';
import * as actions from './actions';
import TodoListPage from './components';


const mapStateToProps = state => {
    return ({ todoList: state.todoList.todoList })
};
const mapDispatchToProps = dispatch => {
    return {
        addTodoAction: (value) => dispatch(actions.addTodoAction(value)),
        searchTodoAction: (valueTemp) => dispatch(actions.searchTodoAction(valueTemp)),
        getListTodoAction: () => dispatch(actions.getListTodoAction()),
        deleteTodoAction: (todo) => dispatch(actions.deleteTodoAction(todo)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListPage);
