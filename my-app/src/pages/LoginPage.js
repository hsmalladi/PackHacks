import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const history = useHistory();
    const navigateTo = () => history.push('/home');

    return (
        <div>
            <div>Login page</div>
            <button onClick={navigateTo}>go to home</button>
        </div>
    );
}

export default LoginPage;