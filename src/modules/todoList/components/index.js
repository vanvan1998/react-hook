import React from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList/todoList';

function TodoListPage(props) {
    return (
        <div>
            <TodoForm addTodoAction={props.addTodoAction} searchTodoAction={props.searchTodoAction}></TodoForm>
            <TodoList todoList={props.todoList}
                getListTodoAction={props.getListTodoAction}
                deleteTodoAction={props.deleteTodoAction}></TodoList>
        </div>
    );
}

export default TodoListPage;