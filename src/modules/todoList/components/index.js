import React from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList/todoList';

function TodoListPage(props) {
    console.log(props)
    return (
        <div>
            <TodoForm AddTodoAction={props.AddTodoAction}></TodoForm>
            <TodoList todoList={props.todoList}
                GetListTodoAction={props.GetListTodoAction}
                DeleteTodoAction={props.DeleteTodoAction}></TodoList>
        </div>
    );
}

export default TodoListPage;