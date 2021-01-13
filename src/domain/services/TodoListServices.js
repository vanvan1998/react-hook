const axios = require('axios');

class TodoListServices {
    static getAPITodoList = () => {
        // return axios.get(`/posts?_limit=10&_page=1`, {})
        return axios.get(`/todos`, {})
    };

}

export default TodoListServices;
