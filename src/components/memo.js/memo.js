import React from 'react';
import PropTypes from 'prop-types';

Memo.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

Memo.defaultProps = {
    todos: [],
    onTodoClick: null
}

function Memo(props) {
    const { todos } = props;
    console.log("aaaaaaaaaaaaa")

    return (
        <ul >
            {todos.map(todo => (
                <li key={todo} >{todo}</li>
            ))}
        </ul>
    );
}

export default React.memo(Memo);