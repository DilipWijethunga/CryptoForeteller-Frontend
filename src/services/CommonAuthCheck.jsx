import React from "react";
import {Redirect} from 'react-router-dom';
import UserService from "./UserService";

const CommonCheckAuth = (Component) => {
    const AuthRoute = () => {
        const isAuth = !!UserService.getCurrentUser();
        if (isAuth) {
            return <Component />;
        } else {
            return <Redirect to="/Login" />;
        }
    };
    return AuthRoute;
};
export default CommonCheckAuth;