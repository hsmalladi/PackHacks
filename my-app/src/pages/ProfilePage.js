import React, { useState } from "react";
import Navbar from "./Navbar";
import havish from "../images/havish.jpeg";
import styles from "../css/ProfilePage.css";

const ProfilePage = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Navbar />
            <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mt-6" style={{ width: "32vh", marginLeft: "7vw" }}>
                <img src={havish} alt="havish" className="image" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} />
                <h2 class="mt-6">Havish Malladi</h2>
                <div class="button mt-4" style={{ width: "100%", backgroundColor: "#2FBC6A" }}>Edit Profile</div>
            </div>
        </div>

    )
}

export default ProfilePage;