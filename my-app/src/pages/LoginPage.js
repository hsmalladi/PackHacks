import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "../css/LoginPage.css";
import { Link } from "react-router-dom";
import image from "../images/greenlogo.png";

const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleClick() {
        if (formError()) {
            setErrorMessage(formError);
            console.log("formError");
        } else {
            console.log("else");
            //log in
            history.push('/home');
        }
    }

    function formError() {
        if (email !== "havish.malladi@duke.edu") {
            return "Incorrect email";
        }
        if (email === "havish.malladi@duke.edu" && password !== "havishmalladi") {
            return "Incorrect password";
        }
        setErrorMessage(null);
        return null;
    }

    return (
        <div class="container" style={{ fontFamily: "PingFang SC" }}>
            <img src={image} alt="logo" />
            <div class="box" style={{ width: "70vh", height: "55vh", margin: "auto" }}>
                <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center pt-6 pb-6">
                    <h4 class="has-text-weight-bold is-size-3" style={{ marginTop: "-20px", color: "#2FBC6A" }}>Log in to atrium</h4>
                    <div class="level mt-4">
                        <input
                            type="text"
                            value={email}
                            placeholder="Email"
                            style={{ width: "300px" }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="level mt-2">
                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            style={{ width: "300px" }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="message is-danger mb-4 has-text-centered">
                        {errorMessage ? (
                            <div className="message-body pt-1" style={{ height: "15px", width: "250px" }}>{errorMessage}</div>
                        ) : (
                            <div style={{ margin: "24px auto" }} />
                        )}
                    </div>
                    <div
                        class={`button ${styles.button_custom} has-text-white has-text-weight-semibold`}
                        style={{
                            backgroundColor: "#2FBC6A", width: "300px"
                        }}
                        onClick={() => handleClick()}
                    >
                        Login
                    </div>
                    {/*<Link to="/insert/your/path/here" className="btn btn-primary">hello</Link>*/}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;









