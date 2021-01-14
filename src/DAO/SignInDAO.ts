import ErrorDTO from '../DTO/ErrorDTO';
import UserDTO from '../DTO/UserDTO';

const axios = require('axios');

class SignInDAO {

    static POSTLoginAPI = (username: string, password: string) => {
        return axios.post(`/auth/login`, { username, password })
            .then((res: { data: UserDTO }) => {
                return new UserDTO(res.data.username, res.data.password, res.data.token)
            })
            .catch((e: any) => {
                console.log('dao', e.response.data.message)
                return new ErrorDTO(e.response.data.message)
            })
    };
}

export default SignInDAO;