import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "../css/LoginPage.css";

const LoginPage = () => {
    const history = useHistory();
    const navigateTo = () => {
        // delete this 
        history.push('/home');
        if (email === "havish.malladi@duke.edu" && password === "hm") {
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
        <div class="container">
            <div class="box" style={{ width: "70vh", height: "50vh", margin: "25vh auto" }}>
                <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center pt-6 pb-6">
                    <h4 style={{ marginTop: "-20px" }}>Login page</h4>
                    <div class="mt-6">
                        <input
                            type="text"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="mt-4">
                        <input
                            type="text"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div
                        class={`button ${styles.button_custom}`}
                        style={{
                            backgroundColor: "#25eb83", marginTop: "80px", width: "200px"
                        }}
                        onClick={navigateTo}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;









