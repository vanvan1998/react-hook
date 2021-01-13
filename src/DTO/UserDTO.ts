class UserDTO {
    username: string;
    password: string;
    token: string;

    // constructor(userDTO: UserDTO) {
    //     this.username = userDTO.username;
    //     this.password = userDTO.password;
    //     this.token = userDTO.token;
    // }

    constructor(username: string, password: string, token: string) {
        this.username = username;
        this.password = password;
        this.token = token;
    }

    toJSON() {
        return {
            username: this.username,
            password: this.password,
            token: this.token
        }
    }

}

export default UserDTO