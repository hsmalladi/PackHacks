


import React from "react";
import Navbar from "./Navbar";
import ReactTypingEffect from 'react-typing-effect';
import "../css/HomePage.css"

const HomePage = () => {
    return (
        <>
            <Navbar />

            <div className="bg">
            </div>


            <div class="center">
                <div class="has-text-white">
                    <div class="is-size-2">
                        <ReactTypingEffect
                            staticText="Connect with others through" text={["classes", "clubs", "interests"]} eraseDelay="1000" typingDelay="1000"
                        />

                    </div>
                </div>
            </div>
        </>


    );
}

export default HomePage;
