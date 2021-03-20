import React from "react";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div>Hello World!</div>
            <Link to="./login" className="btn btn-primary">hello</Link>
        </div>
    );
}

export default HomePage;