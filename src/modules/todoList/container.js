import { connect } from 'react-redux';
import * as actions from './actions';
import TodoListPage from './components';


const mapStateToProps = state => {
    return ({ todoList: state.todoList.todoList })
};
const mapDispatchToProps = dispatch => {
    return {
        AddTodoAction: (value) => dispatch(actions.AddTodoAction(value)),
        SearchTodoAction: (valueTemp) => dispatch(actions.SearchTodoAction(valueTemp)),
        GetListTodoAction: () => dispatch(actions.GetListTodoAction()),
        DeleteTodoAction: (todo) => dispatch(actions.DeleteTodoAction(todo)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListPage);
