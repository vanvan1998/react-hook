import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_API_KEY_CONFIG,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app();
}

export const auth = firebase.auth();
