import ErrorDTO from '../DTO/ErrorDTO';
import UserDTO from '../DTO/UserDTO';

const axios = require('axios');

class SignInDAO {

    static POSTLoginAPI = (username: string, password: string) => {
        return axios.post(`/auth/login`, { username, password }).then((res: { data: { username: string; password: string; token: string; }; }) => {
            return new UserDTO(res.data.username, res.data.password, res.data.token)
        }
        )
        .catch((e: { data: ErrorDTO; }) => new ErrorDTO(e.data))
    };
}

export default SignInDAO;


// return axios.post(`/auth/login`, { username, password }).then(rep => new userDTO(rep)).catch(e => new errorDTO(e))