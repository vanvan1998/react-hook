import React, { useEffect } from 'react';
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
            props.getListTodoAction()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todoList])

    function handleTodoListClick(todo) {
        props.deleteTodoAction(todo)
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

export default TodoList;