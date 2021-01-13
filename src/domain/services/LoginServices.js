import SignInDAO from '../../DAO/SignInDAO.ts';

class LoginServices {

    static POSTLoginAPI = (username, password) => {
        return SignInDAO.POSTLoginAPI(username, password)
    };
}

export default LoginServices;
