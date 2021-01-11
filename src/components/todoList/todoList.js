import React, { useEffect } from 'react';
import * as actions from "../../actions/index";
import { connect } from 'react-redux';
import styled from "styled-components";

const Title = styled.li`
  font-size: 1.5em;
  height:1.5em;
  text-align: left;
  color: palevioletred;
`;

function TodoList(props) {
    const { todoList } = props

    useEffect(() => {
        if (!todoList) {
            props.GetListTodoAction()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todoList])

    function handleTodoListClick(todo) {
        props.DeleteTodoAction(todo)
    }

    return (
        <ul className='todo-list'>
            {todoList?.map(todo => (
                // <li className='todo-item' key={todo} onClick={() => handleTodoListClick(todo)}>{todo}</li>
                <Title key={todo} onClick={() => handleTodoListClick(todo)}>{todo}</Title>
            ))}
        </ul>
    );
}

const mapStateToProps = state => {
    return ({ todoList: state.todoList.todoList })
};
const mapDispatchToProps = dispatch => {
    return {
        GetListTodoAction: () => dispatch(actions.todoListAction.GetListTodoAction()),
        DeleteTodoAction: (todo) => dispatch(actions.todoListAction.DeleteTodoAction(todo)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);