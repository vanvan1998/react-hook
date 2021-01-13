const axios = require('axios');

class TodoListServices {
    static GetAPITodoList = () => {
        // return axios.get(`/posts?_limit=10&_page=1`, {})
        return axios.get(`/todos`, {})
    };

}

export default TodoListServices;
