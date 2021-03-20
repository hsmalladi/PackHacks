import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const history = useHistory();
    const navigateTo = () => {
        if (email === "havishmalladi@gmail.com" && password === "hm") {
            history.push('/home');
        }
        else if (email !== "havishmalladi@gmail.com") {
            console.log("There is no account under this email");
        }
        else if (email === "havishmalladi@gmail.com" && password !== "hm") {
            console.log("Wrong password");
        }
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    {/*Check if user has an account*/ }
    /*function formError() {
        var re = /\S+@\S+\.\S+/;
        if (email.length == 0 || !re.test(email)) {
            return "Not a valid email!";
        }
        if (password.length == 0) {
            return "no password";
        }
        setErrorMessage(null);
        return null;
    }*/

    return (
        <div>
            <div>Login page</div>
            <div>
                <input
                    type="text"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                {errorMessage ? (
                    <div>{errorMessage}</div>
                ) : (
                    <div />
                )}
            </div>
            <button onClick={navigateTo}>Login</button>
        </div>
    );
}

export default LoginPage;









