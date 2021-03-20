import React from "react";
import Navbar from "./Navbar";
import ReactTypingEffect from 'react-typing-effect';
import "../css/HomePage.css"
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const history = useHistory();

    function handleClick() {
        history.push('/profile');
    }

    return (
        <div>
            <Navbar />

            <div className="bg">
            </div>


            <div class="center" style={{ fontFamily: "PingFang SC" }}>
                <div class="has-text-white">
                    <div class="is-size-1 " style={{ lineHeight: "60px" }}>
                        Connect with others through
                        <br />
                        <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                            <ReactTypingEffect
                                text={["classes", "clubs", "interests"]} eraseDelay="1000" typingDelay="1000"
                            />
                            <div style={{ height: "50px" }}></div>
                            <div class="button has-text-white" onClick={() => handleClick()} style={{ backgroundColor: "#2FBC6A", width: "25%", height: "75px", fontWeight: "bold" }}>
                                My atrium
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default HomePage;
