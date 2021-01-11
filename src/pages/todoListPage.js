import React from 'react';
import TodoForm from './../components/todoForm/todoForm';
import TodoList from './../components/todoList/todoList';

function TodoListPage() {
    return (
        <div>
            <TodoForm ></TodoForm>
            <TodoList ></TodoList>
        </div>
    );
}

export default TodoListPage;