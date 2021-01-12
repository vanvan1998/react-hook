import { Redirect, Route } from "react-router-dom";
import AuthenticationService from "../../../domain/services/AuthenticationService";

export default function PrivateRoute({ component: Component, ...rest }) {
    const currentUser = AuthenticationService.getCurrentUser()
    return (
        <Route {...rest} render={props => (
            currentUser ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
} 