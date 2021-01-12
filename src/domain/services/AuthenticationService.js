import { auth } from "../../core/firebaseConfig";

class AuthenticationService {
    static onAuthStateChanged = () => {
        auth.onAuthStateChanged(async user => {
            if (user) {
                // const token = await user.getIdToken()
                // console.log(token)
            } else {
                console.log('user not login')
            }
        });
    };

    static getCurrentUser = () => {
        return auth.currentUser;
    }

    static getGoogleAuthProvider = () => {
        console.log(auth)
        return auth.GoogleAuthProvider.PROVIDER_ID;
    }

    static getAuth = () => {
        return auth;
    }
}

export default AuthenticationService;
