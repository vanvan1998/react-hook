import SignInDAO from '../../DAO/SignInDAO.ts';

class TodoListServices {

    static POSTLoginAPI = (username, password) => {
        return SignInDAO.POSTLoginAPI(username, password)
    };
}

export default TodoListServices;
 